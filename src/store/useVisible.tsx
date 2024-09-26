import { create } from "zustand";

interface VisibleProps {
  visibleComponent: string;
  setVisibleComponent: (component: string) => void;
}

export const useVisibleStore = create<VisibleProps>((set) => ({
  visibleComponent: "#intro",
  setVisibleComponent: (component) => set({ visibleComponent: component }),
}));
