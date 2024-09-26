import React, { useState } from "react";
import { Address } from "viem";
import { FaAngleDown } from "react-icons/fa";

interface UserToken {
  canActivateSeasonalBonus: boolean;
  tokenId?: string;
  multiplier?: number;
  seasonalMultiplier?: number;
  activeSeasonalMultiplier?: any;
  updatedAtSeason?: number;
  rank?: number;
  location?: Address | undefined;
  staker?: Address;
  owner?: Address | undefined;
  isStaked: boolean;
  image: string;
  thumbnail: string;
}

interface DropdownProps {
  nfts: UserToken[] | null;
  onNFTSelect: (nft: UserToken[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ nfts, onNFTSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNFTs, setSelectedNFTs] = useState<UserToken[]>([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (nft: UserToken) => {
    const selectedIndex = selectedNFTs.findIndex(
      (selected) => selected.tokenId === nft.tokenId,
    );
    if (selectedIndex === -1) {
      setSelectedNFTs([...selectedNFTs, nft]);
    } else {
      const updatedSelection = [...selectedNFTs];
      updatedSelection.splice(selectedIndex, 1);
      setSelectedNFTs(updatedSelection);
    }
  };

  const handleDone = () => {
    onNFTSelect(selectedNFTs);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between p-2 bg-accent/5 hover:bg-accent/10 transition-colors rounded-xl cursor-pointer w-full"
        onClick={handleToggle}
      >
        <p className="font-light">{selectedNFTs.length} NFT(s) selected</p>
        <button>
          <FaAngleDown />
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(nfts) &&
            nfts.map((nft: UserToken, index: number) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 ${
                  selectedNFTs.find(
                    (selected) => selected.tokenId === nft.tokenId,
                  )
                    ? "bg-accent/10"
                    : "bg-accent/5 hover:bg-accent/10"
                } transition-colors rounded-xl cursor-pointer w-full`}
                onClick={() => handleSelect(nft)}
              >
                <img
                  src={`https://cdn.rareboard.com/ipfs/QmWGqxdfk89Xr2VeCX1nUSKRgThuoWMKBsxP1apsWvKo4N/${nft.tokenId}.png?optimizer=image`}
                  className="size-7"
                />
                <p className="font-light">LFG CNFT#{nft.tokenId}</p>
              </div>
            ))}
          <button
            className="p-2 bg-blue-500 text-white rounded-md mt-2"
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
