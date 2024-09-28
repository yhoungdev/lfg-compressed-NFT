import { PublicKey } from "@metaplex-foundation/umi";

export const cNFTMetadata = (creatorPublicKey: PublicKey) => ({
  name: "Obiabo's Profile Image NFT",
  symbol: "EONFT",
  description:
    "This NFT represents my GitHub, Farcaster, and Twitter profile. GitHub: GitHub/yhoungdev, Twitter: x.com/obiabo_immanuel",
  uri: "https://drive.google.com/uc?id=1MGOsuXJLpvnuZOgohowwa8GMViZRs_MJ",
  collection: { key: "collectionMint", verified: false },
  attributes: [
    { trait_type: "Github", value: "https://github.com/yhoungdev" },
    { trait_type: "Twitter", value: "https://x.com/obiabo_immanuel" },
    { trait_type: "Farcaster", value: "https://warpcast.com/obiabo" },
    { trait_type: "LinkedIn", value: "https://www.linkedin.com/in/emmanuel-obiabo-5a66371aa/" },
  ],
  external_url: "https://github.com/yhoungdev",
  sellerFeeBasisPoints: 10,
  creators: [
    {
      address: creatorPublicKey.toString(),
      share: 100,
    },
  ],
});

export const collectionMetadata = {
  name: "Obiabo's cNFT Collection",
  symbol: "OBIC",
  uri: "https://github.com/yhoungdev",
  sellerFeeBasisPoints: 500,
};
