import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplBubblegum } from "@metaplex-foundation/mpl-bubblegum";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";

export function useUmi() {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();

  return useMemo(() => {
    if (!publicKey || !signTransaction || !signAllTransactions) return null;

    return createUmi("https://api.devnet.solana.com")
      .use(
        walletAdapterIdentity({
          publicKey,
          signTransaction,
          signAllTransactions,
        })
      )
      .use(mplBubblegum())
      .use(mplTokenMetadata());
  }, [publicKey, signTransaction, signAllTransactions]);
}
