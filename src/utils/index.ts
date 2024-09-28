import { Keypair } from "@solana/web3.js";
import bs58 from "bs58"; 

export const NFT_IMAGE =
  "https://avatars.githubusercontent.com/u/54102389?v=4";

//Hahahah FYI this is just a demo account i created
// For the sake of this test hahaha 
const BASE58_PRIVATE_KEY = '';

const privateKeyUint8Array = bs58.decode(BASE58_PRIVATE_KEY);

export const getKeypair = () => {
  return Keypair.fromSecretKey(privateKeyUint8Array);
};

export const getPublicKey = () => {
  const keypair = getKeypair();
  return keypair.publicKey.toBase58();
};

export const getSecretKey = () => {
  const keypair = getKeypair();
  return Array.from(keypair.secretKey);
};
