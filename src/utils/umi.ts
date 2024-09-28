import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplBubblegum } from '@metaplex-foundation/mpl-bubblegum'
import { keypairIdentity } from '@metaplex-foundation/umi'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import { getSecretKey } from '.'
import { irysUploader } from '@metaplex-foundation/umi-uploader-irys';
import json from '@/keypair.json'

export const umi = createUmi('https://api.devnet.solana.com')
.use(mplBubblegum())
.use(mplTokenMetadata())
.use(irysUploader())

const signer = getSecretKey(umi)


const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(json))

umi.use(keypairIdentity(keypair));