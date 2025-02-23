import { create } from "zustand";

export interface NavItem {
  id: string;
  title: string;
  visible: boolean;
  icon?: string;
  children?: NavItem[];
  target?: string;
}

interface GlobalState {
  isMobileSideNavOpened: boolean;
  setMobileSideNav: (value: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  isMobileSideNavOpened: false,
  setMobileSideNav: (value) => set({ isMobileSideNavOpened: value }),
}));
