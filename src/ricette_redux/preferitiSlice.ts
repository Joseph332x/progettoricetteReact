import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const preferitiSlice = createSlice({
  name: "preferiti",
  initialState: {
    value: [] as number[],
  },
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const exists = state.value.includes(action.payload);
      console.log("exists");
      if (exists) {
        state.value = state.value.filter((item) => item !== action.payload);
      } else state.value.push(action.payload);
    },
  },
});

export const { toggle } = preferitiSlice.actions;
export const preferiteReducer = preferitiSlice.reducer;
