import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { counterSlice } from "./slices/counter";
import { StoreState } from "./constants";

export const useStore = create<StoreState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...counterSlice(set),
        }),
        {
          name: "todo-storage",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
