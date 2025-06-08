import { createSlice } from "@reduxjs/toolkit";


export const areas = ["italian", "canadian", "japanese", "mexican"]; 

const areaFlags: Record<string, string> = {
  italian: "🇮🇹",
  canadian: "🇨🇦",
  japanese: "🇯🇵",
  mexican: "🇲🇽",
};



export const areaSlice = createSlice({
  name: "area",
  initialState: {
    value: "italian",
  },
  reducers: {
    setArea: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setArea } = areaSlice.actions;
export const areaReducer = areaSlice.reducer;
export { areaFlags };