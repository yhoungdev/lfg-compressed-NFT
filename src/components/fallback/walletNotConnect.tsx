import { PiWalletLight } from "react-icons/pi";
import { ConnectWalletButton } from "../ui/button/connectButton";
import { Button } from "../Profile";

interface IWallet {
  title?: string;
  description?: string;
}

const IsNotConnected = ({ title, description }: IWallet): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="text-center flex items-center flex-col">
        <h1 className="text-4xl mb-2 text-center">
          <PiWalletLight size={"1em"} color="white" />{" "}
        </h1>

        <h1 className="text-sm md:text-lg text-center">
          {title || "No Wallet Connected"}
        </h1>
        <small className="text-gray-400">
          {description || "Connect Wallet to Continue"}
        </small>
        <div className="mt-3">
          <ConnectWalletButton>
            <Button>Connect Wallet</Button>
          </ConnectWalletButton>
        </div>
      </div>
    </div>
  );
};

export default IsNotConnected;
