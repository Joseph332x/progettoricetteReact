import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const preferitiSlice = createSlice({
  name: "preferiti",
  initialState: {
    value: [] as number[],
  },
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const exists = state.value.includes(action.payload);
      console.log("exists");
      if (exists) {
        state.value = state.value.filter((item) => item !== action.payload);
      } else state.value.push(action.payload);
    },
  },
});

export const { toggleFavourite } = preferitiSlice.actions;
export const preferiteReducer = preferitiSlice.reducer;
