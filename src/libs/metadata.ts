import { PublicKey } from "@metaplex-foundation/umi";
import metajson from './metadata.json'

export const cNFTMetadata = (creatorPublicKey: PublicKey) => ({
  name: "Obiabo",
  symbol: "_Whoami",
  uri: metajson,
  sellerFeeBasisPoints: 500, 
  creators: [{ address: creatorPublicKey, verified: true, share: 100 }],
  collection: {
    key: null as PublicKey | null,
    verified: false,
  },
});

export const collectionMetadata = {
  name: "Obiabos NFT Collection",
  symbol: "DUCKS",
  uri: metajson,
  sellerFeeBasisPoints: 500, 
};