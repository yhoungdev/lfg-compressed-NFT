import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useWallet } from "@solana/wallet-adapter-react";
import IsNotConnected from "./fallback/walletNotConnect";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { connected, publicKey } = useWallet();
  const walletAddress = publicKey?.toString();

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block md:w-1/5 fixed">
          <Sidebar />
        </div>

        <div className="md:h-full w-full md:w-3/5 mx-auto py-5 px-10 md:ml-[25%] z-10 mb-[95px] md:mb-0">
          {/* {connected ? (
           
            children
          ) : (
            <IsNotConnected />
          )} */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
