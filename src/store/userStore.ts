import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
type UserState = {
    fullname?: string, 
    email: string, 
    password: string,
    admin: boolean
    _id: string
  };
type StoreType = {
  user: UserState;
  saveUser: (user: UserState) => void;
  logoutUser: () => void;
};

const useUserStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        user: {} as UserState,
        saveUser: (user) => set({ user }),
        logoutUser: () => set({ user: {} as UserState }),
      }),
      {
        name: "user-store",
      }
    )
  )
);

export default useUserStore;
