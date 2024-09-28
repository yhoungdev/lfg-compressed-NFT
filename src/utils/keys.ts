import { generateSigner, publicKey } from "@metaplex-foundation/umi";
import { createMerkleTree } from "./createMarkleTree"; 

export const createKeys = () => {
  const leafOwner = publicKey("8hBosSCfzLy2fyoDU6UxfyALdj3vpPcW62s47Mth2ZSP");
  const merkleTree = createMerkleTree();
  const merkleTreePublicKey = publicKey(merkleTree.toString());
  const collectionId = generateSigner(umi);
  
  return { leafOwner, merkleTreePublicKey, collectionId };
};
