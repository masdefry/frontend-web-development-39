import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UseCounterStore = {
  counter: number;
  increase: () => void;
  decrease: () => void;
};

const useCounterStore = create<UseCounterStore>()(
  persist(
    (set) => ({
      counter: 0, // Property (Untuk menyimpan data)
      increase: () =>
        set((state) => {
          if (state?.counter < 10) return { counter: state?.counter + 1 };

          return state;
        }),
      decrease: () =>
        set((state) => {
          if (state?.counter > 0) return { counter: state?.counter - 1 };

          return state;
        }),
    }),
    {
      name: 'counter',
    },
  ),
);

export default useCounterStore;
