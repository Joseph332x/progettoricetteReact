import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
 reducers: {
togglea: (state) => {
state.value = state.value === "light" ? "dark" : "light";
},
setTheme: (state, action) => {
state.value = action.payload;
},
},
});
export const { togglea, setTheme } = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;