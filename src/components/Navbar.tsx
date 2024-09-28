import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ReactDOM from "react-dom";
import { ConnectWalletButton } from "./ui/button/connectButton";
import { Button } from "./Profile";
import { useWallet } from "@solana/wallet-adapter-react";
import { PiWallet } from "react-icons/pi";
import MobileNav from "./mobile/mobileNav";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-full bg-black w-60 flex flex-col justify-center items-center lg:hidden"
      style={{
        zIndex: 99999,
        width: "50%",
      }}
    >
      <MobileNav />
    </div>,
    document.getElementById("sidebar-root") as HTMLElement,
  );
};

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { connected, disconnect } = useWallet();
  const wallet = useWallet();
  const getAddress = wallet.publicKey?.toString();
  const disconnectWallet = () => disconnect();

  return (
    <div className="overflow-x-hidden flex items-center justify-between sticky top-0 backdrop-blur-3xl py-2 border-b border-accent/10 px-5 lg:px-10 z-50">
      <img src={"/logos/solanaLogo.svg"} alt="LFG CNFT Points" width={100} height={100} />
      <div className="flex items-center ">
      

        <div className=" lg:flex items-center gap-3">

          {connected ? (
            <div>
              <div
                className="flex mr-3 items-center gap-2 bg-gray-800
                   py-3 px-4 rounded-lg cursor-pointer"
                onClick={disconnectWallet}
              >
                <PiWallet size={"1.5em"} />
                <small>
                  {getAddress?.slice(0, 3)}......{getAddress?.slice(4, 3)}
                </small>
              </div>
            </div>
          ) : (
            <ConnectWalletButton>
              <div className="hidden md:block lg:block">
                <Button>Connect Wallet</Button>
              </div>
              <div className="block md:hidden lg:hidden">
                <PiWallet size={"1.5em"} />
              </div>
            </ConnectWalletButton>
          )}
        </div>

        <FaBars
          size={"1.2em"}
          color="white"
          cursor={"pointer"}
          onClick={toggleSidebar}
          className="lg:hidden grad-text text-grad"
        />
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
