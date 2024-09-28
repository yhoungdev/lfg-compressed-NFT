import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Button } from '../Profile';
import mintCNFT from '@/src/utils/mintCNFT';

export const MintNFT = () => {
    const { publicKey, wallet } = useWallet();
    const [status, setStatus] = useState('');

    const handleMintNFT = async () => {
        if (!publicKey || !wallet) {
            setStatus('Connect wallet first!');
            return;
        }

        try {
            setStatus('Minting in progress...');
            await mintCNFT();
            setStatus('NFT Minted Successfully!');
        } catch (err) {
            console.error('Error minting NFT:', err);
            setStatus('Minting failed. Check console for details.');
        }
    };

    return (
        <div className="w-full md:w-[80%] mx-auto">
            <div className="my-5">
                <center>
                    <Button onClick={handleMintNFT}>Mint NFT</Button>
                </center>
                {status && (
                    <div className="mt-4 text-center">
                        <p>{status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
