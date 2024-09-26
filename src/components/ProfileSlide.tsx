import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { useOpenProfileStore } from "../store/useOpenProfile";

const ProfileSlide = () => {
  const walletAddress = "0x1234567890";

  const { openProfile, setOpenProfile } = useOpenProfileStore();

  return (
    <div
      className={`absolute overflow-hidden h-screen lg:w-[30%] w-screen bg-black/50 z-40 right-0 top-0 backdrop-blur-xl py-5 px-10 ${
        openProfile ? "translate-x-0" : "translate-x-full"
      } transition-all`}
    >
      <div className="flex justify-end">
        <button
          className="size-10 border border-white/50 rounded-full flex items-center justify-center"
          onClick={() => setOpenProfile(false)}
        >
          <LiaTimesSolid />
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="size-24 bg-accent/10 p-1 rounded-full">
          <img
            src={`https://avatars.uploadfly.cloud/6.x/bottts/png?seed=${walletAddress}`}
            alt={walletAddress}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-2 text-lg">Benjamin DaSilva</h3>
        <p className="text-xs text-gray-100 flex items-center gap-x-1">
          <MdOutlineAccountBalanceWallet className="text-sm" />
          {walletAddress}
        </p>
        <div className="mt-7 flex items-start w-full">
          <a
            href="https://twitter.com/da_silva_ben"
            target="_blank"
            className="flex items-center gap-x-2 text-sm group"
          >
            <SiTwitter />{" "}
            <span className="group-hover:underline">@da_silva_ben</span>
          </a>
        </div>
        <div className="mt-10 w-full flex flex-col gap-y-4">
          <button className="uppercase text-sm rounded-full py-3 px-4 border font-thin border-gray-50/10 transition-colors backdrop-blur-lg bg-white/10 w-[95%] mx-auto flex items-center justify-center gap-x-2 hover:bg-accent/20">
            <SiDiscord /> Connect Discord
          </button>
          <button className="uppercase text-sm rounded-full py-3 px-4 border font-thin border-gray-50/10 transition-colors backdrop-blur-lg bg-white/10 w-[95%] mx-auto flex items-center justify-center gap-x-2 hover:bg-accent/20">
            <SiTwitter /> Connect Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSlide;
