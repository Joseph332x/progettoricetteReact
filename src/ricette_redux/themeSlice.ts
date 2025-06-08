import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "light",
  },
 reducers: {
toggleDarkMode: (state) => {
state.value = state.value === "light" ? "dark" : "light";
},
setTheme: (state, action) => {
state.value = action.payload;
},
},
});
export const { toggleDarkMode, setTheme } = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;