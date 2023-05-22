import { MERGE_STATE, StoreState } from "../constants";

const initState = {
  counter: 0,
};

export const counterSlice = (set: any) => ({
  ...initState,

  increase: () =>
    set(
      (state: StoreState) => {
        state.counter += 1;
      },
      MERGE_STATE,
      "counter/increase"
    ),
});
