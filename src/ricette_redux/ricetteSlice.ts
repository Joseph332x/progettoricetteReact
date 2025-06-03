import { createSlice } from "@reduxjs/toolkit";
import { type Meal } from "../models/Meal";

export const MealSlice = createSlice({
  name: "meal",
  initialState: {
    value: [] as Meal[],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = MealSlice.actions;
export const MealReducer = MealSlice.reducer;
