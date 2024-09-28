import { createNft } from "@metaplex-foundation/mpl-token-metadata";
import { percentAmount } from "@metaplex-foundation/umi";

export const createCollection = async (umi: any, collectionId: any, metadata: any, collectionMetadataUri: string) => {
  console.log("Creating NFT collection...");
  await createNft(umi, {
    mint: collectionId,
    name: metadata?.name,
    uri: collectionMetadataUri,
    sellerFeeBasisPoints: percentAmount(5.5),
    isCollection: true,
  }).sendAndConfirm(umi);
  
  console.log("NFT collection created at:", collectionId.publicKey.toString());
};
