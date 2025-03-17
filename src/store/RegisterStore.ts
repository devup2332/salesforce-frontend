import { create } from "zustand";

type RegisterStore = {
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    businessName?: string;
    password?: string;
  };
  setData: (data: Pick<RegisterStore, "data">) => void;
};

export const useRegisterStore = create<RegisterStore>((set) => ({
  data: {
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    password: "",
  },
  setData: (data: Pick<RegisterStore, "data">) => set(data),
}));
