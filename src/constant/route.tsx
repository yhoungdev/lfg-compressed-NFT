import { ReactNode } from "react";
import { TbBolt } from "react-icons/tb";
import { LuBox } from "react-icons/lu";
import { PiRobotBold } from "react-icons/pi";
import { FaPhotoFilm } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { RiVipCrownLine } from "react-icons/ri";

interface ISidebarProps {
  name: string;
  path: string;
  icon: ReactNode;
  isDisabled: boolean;
}

export const DASHBOARDNAV: ISidebarProps[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <TbBolt />,
    isDisabled: false,
  },
  {
    name: "NFTS",
    path: "/gallery",
    icon: <FaPhotoFilm />,
    isDisabled: false,
  }
];
