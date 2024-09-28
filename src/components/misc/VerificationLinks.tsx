import React from "react";
import { Signer } from "@metaplex-foundation/umi";

interface VerificationLinksProps {
  mintInfo: {
    merkleTree: Signer;
    collectionNft: Signer;
    assetId?: string;
  };
}

export default function VerificationLinks({
  mintInfo,
}: VerificationLinksProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Verification Links:</h3>
      <ul className="list-disc pl-5">
        <li>
          <a
            href={`https://explorer.solana.com/address/${mintInfo.merkleTree.publicKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Merkle Tree on Solana Explorer
          </a>
        </li>
        <li>
          <a
            href={`https://explorer.solana.com/address/${mintInfo.collectionNft.publicKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Collection NFT on Solana Explorer
          </a>
        </li>
        {mintInfo.assetId && (
          <li>
            <a
              href={`https://explorer.solana.com/address/${mintInfo.assetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View cNFT Asset on Solana Explorer
            </a>
          </li>
        )}
      </ul>
      <p className="mt-4">Your cNFT has been minted successfully.</p>
    </div>
  );
}
