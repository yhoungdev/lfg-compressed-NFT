import { create } from "zustand";

interface Props {
  openProfile: boolean;
  setOpenProfile: (state: boolean) => void;
}

export const useOpenProfileStore = create<Props>((set) => ({
  openProfile: false,
  setOpenProfile: (state) => set({ openProfile: state }),
}));
