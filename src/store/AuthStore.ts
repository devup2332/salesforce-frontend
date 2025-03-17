import { create } from "zustand";

type AuthStore = {
  user?: {
    email: string;
    full_name: string;
    id: string;
  };
  setUser: (user: AuthStore["user"]) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
