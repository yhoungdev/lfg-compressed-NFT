

import {
  createTree,
  mintToCollectionV1,
  parseLeafFromMintToCollectionV1Transaction,
} from "@metaplex-foundation/mpl-bubblegum";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";
import {
  generateSigner,
  Umi,
  some,
  Signer,
  percentAmount,
  publicKey,
} from "@metaplex-foundation/umi";
import { cNFTMetadata, collectionMetadata } from "./metadata";
import bs58 from "bs58";

export async function createMerkleTree(umi: Umi): Promise<Signer> {
  const merkleTree = generateSigner(umi);
  const builder = await createTree(umi, {
    merkleTree,
    maxDepth: 14,
    maxBufferSize: 64,
    public: false,
  });
  await builder.sendAndConfirm(umi);
  console.log("Merkle Tree created:", merkleTree.publicKey.toString());
  return merkleTree;
}

export async function createCollectionNFT(umi: Umi): Promise<Signer> {
  const collectionNft = generateSigner(umi);
  const builder = await createNft(umi, {
    mint: collectionNft,
    name: collectionMetadata.name,
    symbol: collectionMetadata.symbol,
    uri: collectionMetadata.uri,
    sellerFeeBasisPoints: percentAmount(collectionMetadata.sellerFeeBasisPoints / 100, 2),
    isCollection: true,
  });
  await builder.sendAndConfirm(umi);
  console.log("Collection NFT created:", collectionNft.publicKey.toString());
  return collectionNft;
}


export async function mintCNFT(
  umi: Umi,
  merkleTree: Signer,
  collectionNft: Signer,
  leafOwner: string
): Promise<string> {
  const metadata = cNFTMetadata(publicKey(leafOwner));
  const builder = await mintToCollectionV1(umi, {
    leafOwner: publicKey(leafOwner),
    merkleTree: merkleTree.publicKey,
    collectionMint: collectionNft.publicKey,
    metadata: {
      name: metadata.name,
      uri: metadata.uri,
      sellerFeeBasisPoints: 500,
      collection: some({ key: collectionNft.publicKey, verified: false }),
      creators: [
        {
          address: umi.identity.publicKey,
          verified: true,
          share: 100,
        },
      ],
    },
  });
  const result = await builder.sendAndConfirm(umi);
  console.log("Minting Transaction:", getSolanaExplorerUrl(result.signature));
  const leaf = await parseLeafFromMintToCollectionV1Transaction(umi, result.signature);
  return leaf.id;
}


export async function mintMultipleCNFTs(
  umi: Umi,
  merkleTree: Signer,
  collectionNft: Signer,
  recipients: string[]
): Promise<string[]> {
  const results: string[] = [];
  const batchSize = 5;
  const delay = 5000;

  for (let i = 0; i < recipients.length; i += batchSize) {
    const batch = recipients.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}:`, batch);

    try {
      const batchResults = await Promise.all(
        batch.map((recipient) => mintCNFT(umi, merkleTree, collectionNft, recipient))
      );
      results.push(...batchResults);
      console.log(`Batch minted successfully:`, batchResults);
    } catch (error) {
      console.error(`Error minting batch for recipients ${batch}:`, error);
      throw new Error(`Failed to mint batch for recipients ${batch}. Error: ${error.message}`);
    }

    console.log(`Minted ${results.length}/${recipients.length} cNFTs.`);
    if (i + batchSize < recipients.length) {
      console.log(`Waiting for ${delay / 1000} seconds before the next batch...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  return results;
}


function getSolanaExplorerUrl(signature: Uint8Array, cluster: string = "devnet"): string {
  const base58Signature = bs58.encode(signature);
  return `https://explorer.solana.com/tx/${base58Signature}?cluster=${cluster}`;
}
