import { ReactNode } from "react";


const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border mt-3 w-full md:w-[300px] border-accent rounded-xl p-3 h-32 flex justify-between flex-col items-center">
      {children}
    </div>
  );
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="default_button" onClick={onClick}>
      {children}
    </button>
  );
};

const Profile = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl md:text-2xl font-semibold">Profile</h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div>
          <h2 className="font-semibold mb-1">Wallet Link</h2>
          <Card>
            <p className="text-xs font-medium">
              You can link multiple wallets holding LFG CNFT Points
            </p>
            <Button>Link</Button>
          </Card>
        </div>
        {/**
        <div>
          <h2 className="font-semibold mb-1">Twitter</h2>
          <Card>
            <p className="text-xs font-medium mt-5">Not Linked</p>
            <Button onClick={linkTwtitter}>Link</Button>
          </Card>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Discord</h2>
          <Card>
            <p className="text-xs font-medium mt-5">Not Linked</p>
            <Button onClick={linkDiscord}>Link</Button>
          </Card>
        </div>
         */}
      </div>
    </div>
  );
};

export default Profile;
