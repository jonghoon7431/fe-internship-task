import { create } from "zustand/react";

type State = {
  accessToken: string | null;
};
type Action = {
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}));
