import { umi } from "./umi";

export const uploadMetadata = async (data: any) => {
  console.log("Uploading metadata...");
  const collectionMetadataUri = await umi.uploader.uploadJson(data);
  console.log("Metadata uploaded at:", collectionMetadataUri);
  return collectionMetadataUri;
};
