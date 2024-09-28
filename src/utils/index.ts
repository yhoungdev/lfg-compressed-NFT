import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";


const BASE58_PRIVATE_KEY = import.meta.env.VITE_SECRETE_KEY;


export const getKeypair = () => {
  try {
   
    const secretKey = bs58.decode(BASE58_PRIVATE_KEY);
    if (secretKey.length !== 64) {
      throw new Error(`Invalid secret key length: ${secretKey.length}. Expected 64.`);
    }
    return Keypair.fromSecretKey(secretKey);
  } catch (error) {
    console.error("Error getting Keypair:", error);
    throw error;
  }
};


export const getPublicKey = () => {
  const keypair = getKeypair();
  return keypair.publicKey.toBase58();
};


export const getSecretKey = () => {
  const keypair = getKeypair();
  return Array.from(keypair.secretKey);
};


try {
  const keypair = getKeypair();
  console.log('Public Key:', keypair.publicKey.toBase58());
  console.log('Secret Key Length:', keypair.secretKey.length);
  // console.log('Secret Key:', Array.from(keypair.secretKey));
} catch (error) {
  console.error("Failed to create keypair for debugging:", error);
}
