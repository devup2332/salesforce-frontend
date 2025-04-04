import { create } from "zustand";

type AuthStore = {
  user?: {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    imageUrl?: string;
  };
  loading?: boolean;
  setUser: (user: AuthStore["user"]) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));
