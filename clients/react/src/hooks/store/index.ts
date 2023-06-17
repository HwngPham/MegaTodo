import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { counterSlice } from "./slices/counter";
import { StoreState } from "./constants";
import { todoSlice } from "./slices/todo";

export const useStore = create<StoreState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...counterSlice(set),
          ...todoSlice(set),
        }),
        {
          name: "todo-storage",
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
