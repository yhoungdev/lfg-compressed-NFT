import { useState } from 'react';
import { useConnection, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { Metaplex, walletAdapterIdentity, toMetaplexFile } from '@metaplex-foundation/js';
import { Button } from '../Profile';
import { useDropzone } from 'react-dropzone';

export const MintNFT = () => {
    const { connection } = useConnection();
    const { publicKey, wallet } = useWallet();
    const [nftName, setNftName] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [status, setStatus] = useState('');

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setImage(acceptedFiles[0]);
            setStatus('Image selected.');
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleMintNFT = async () => {
        if (!publicKey || !wallet) {
            setStatus('Connect wallet first!');
            return;
        }

        try {
            setStatus('Minting in progress...');
            const metaplex = Metaplex.make(connection)
                .use(walletAdapterIdentity(wallet));

            const imageFile = image ? toMetaplexFile(new Uint8Array(await image.arrayBuffer()), image.name) : null;
            const imageUri = imageFile ? await metaplex.storage().upload(imageFile) : '';

            const { uri } = await metaplex
                .nfts()
                .uploadMetadata({
                    name: nftName,
                    symbol: '',
                    description: 'NFT created using Solana and Vite',
                    image: imageUri,
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


    const imagePreviewUrl = image ? URL.createObjectURL(image) : '';

    return (
        <div className='w-full md:w-[80%] mx-auto'>
            <h2>Mint an NFT</h2>
            <input
                type="text" 
                className="input input-bordered w-full max-w-xs" 
                onChange={(e) => setNftName(e.target.value)}
                placeholder="NFT Name"
            />
            
            <div {...getRootProps()} 
                className='w-full h-[10em]  cursor-pointer flex items-center justify-center'
                style={{ border: '2px dashed #ccc', padding: '20px', margin: '20px 0' }}>
                <input {...getInputProps()} />
                <p>{image ? `Selected file: ${image.name}` : 'Drag & drop an image here, or click to select one'}</p>
            </div>

            {imagePreviewUrl && (
                <div style={{ marginBottom: '20px' }}>
                    <h3>Image Preview:</h3>
                    <img 
                        src={imagePreviewUrl} 
                        alt="Preview" 
                        style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain', border: '1px solid #ccc' }} 
                    />
                </div>
            )}

           <div className="my-5">
           <center>
            <Button onClick={handleMintNFT}>Mint NFT</Button>
            <p className='text-center mt-4'>{status}</p>
            </center>
     
           </div>
        </div>
    );
};
