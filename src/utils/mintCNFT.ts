import { mintToCollectionV1 } from "@metaplex-foundation/mpl-bubblegum";
import { getMetadata } from "./metadata";
import { createKeys } from "./keys";
import { uploadMetadata } from "./uploadMetadata";
import { createCollection } from "./createCollection";
import { umi } from "./umi";

const mintCNFT = async () => {
  const metadata = getMetadata();
  const { leafOwner, merkleTreePublicKey, collectionId } = createKeys();

  const data = {
    name: "Obiabo",
    image: metadata.image,
    description: metadata.description,
    external_url: "https://github.com/yhoungdev",
  };

  const collectionMetadataUri = await uploadMetadata(data);
  
  await createCollection(umi, collectionId, metadata, collectionMetadataUri);

  console.log("Minting cNFT...");
  const { signature } = await mintToCollectionV1(umi, {
    leafOwner,
    merkleTree: merkleTreePublicKey,
    collectionMint: collectionId.publicKey,
    metadata: {
      ...metadata,
      collection: {
        key: collectionId.publicKey,
        verified: false,
      },
      creators: [
        {
          address: umi.identity.publicKey,
          verified: true,
          share: 100,
        },
      ],
    },
  }).sendAndConfirm(umi, {
    send: {
      commitment: "finalized",
    },
  });

  console.log(`Minted cNFT with transaction: ${signature}`);
};

export default mintCNFT;
