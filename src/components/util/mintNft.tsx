import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, keypairIdentity, bundlrStorage, walletAdapterIdentity } from '@metaplex-foundation/js';
import { PublicKey, Keypair } from '@solana/web3.js';

export const MintNFT = () => {
    const { connection } = useConnection();
    const { publicKey, wallet, sendTransaction } = useWallet();
    const [nftName, setNftName] = useState('');
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('');

    const handleMintNFT = async () => {
        if (!publicKey || !wallet) {
            setStatus('Connect wallet first!');
            return;
        }

        try {
            setStatus('Minting in progress...');

            const metaplex = Metaplex.make(connection)
                .use(walletAdapterIdentity(wallet))
                .use(bundlrStorage());

            const { uri } = await metaplex
                .nfts()
                .uploadMetadata({
                    name: nftName,
                    symbol: '',
                    description: 'NFT created using Solana and Vite',
                    image: image, 
                });

            const nft = await metaplex.nfts().create({
                uri,
                name: nftName,
                sellerFeeBasisPoints: 500, 
                creators: [{ address: publicKey, share: 100 }],
            });

            setStatus(`NFT Minted! Mint Address: ${nft.mintAddress.toBase58()}`);
        } catch (err) {
            console.error('Error minting NFT:', err);
            setStatus('Minting failed. Check console for details.');
        }
    };

    return (
        <div>
            <h2>Mint an NFT</h2>
            <input
                type="text"
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
                placeholder="NFT Name"
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={handleMintNFT}>Mint NFT</button>
            <p>{status}</p>
        </div>
    );
};
