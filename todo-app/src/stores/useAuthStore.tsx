import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Users = {
  name: string;
  email: string;
  objectId: string;
};

type UseAuthStore = {
  users: Users;
  setAuth: (payload: Users) => void;
};

const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      users: {
        name: '',
        email: '',
        objectId: '',
      },
      setAuth: (payload: Users) =>
        set((_) => ({
          users: payload,
        })),
    }),
    {
      name: 'users',
      partialize: (state) => ({
        users: { objectId: state?.users?.objectId },
      }),
    },
  ),
);

export default useAuthStore;
