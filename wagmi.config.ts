import { defineConfig } from '@wagmi/cli'
import { blast } from 'wagmi/chains'

export default defineConfig({
  out: "contracts/generated.ts",
  contracts: [
    {
      name: "LFG CNFT PointsStaking",
      address: {
        [blast.id]: "0x718E1Ea675be96Cb3389BC90B31876FE851F19E1",
      },
      abi: require("./.abi/LFG CNFT PointsstakingABI.json"),
    },
    {
      name: "LFG CNFT Points",
      address: {
        [blast.id]: "0x4d910a7eE24a04A6eeebDFe50dd52902AA2Ff0B4",
      },
      abi: require("./.abi/LFG CNFT PointsABI.json"),
    },
  ],
});
