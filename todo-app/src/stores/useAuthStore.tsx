import { create } from 'zustand';

type Users = {
  accountType: string;
  blUserLocale: string;
  created: number;
  email: string;
  lastLogin: number;
  name: string;
  oAuthIdentities: null;
  objectId: string;
  ownerId: string;
  role: string;
  socialAccount: string;
  updated: null;
  'user-token': string;
  userStatus: string;
};

type UseAuthStore = {
  users: Users;
  setAuth: (payload: Users) => void;
};

const useAuthStore = create<UseAuthStore>()((set) => ({
  users: {
    accountType: '',
    blUserLocale: '',
    created: 0,
    email: '',
    lastLogin: 0,
    name: '',
    oAuthIdentities: null,
    objectId: '',
    ownerId: '',
    role: '',
    socialAccount: '',
    updated: null,
    'user-token': '',
    userStatus: '',
  },
  setAuth: (payload: Users) =>
    set((state) => ({
      users: payload,
    })),
}));

export default useAuthStore;
