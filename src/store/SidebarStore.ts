import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setSidebarOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));
