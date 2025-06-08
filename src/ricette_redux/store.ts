import { configureStore } from "@reduxjs/toolkit";

import { MealReducer } from "./ricetteSlice";
import { preferiteReducer } from "./preferitiSlice";
import { themeReducer } from "./themeSlice";
import { areaReducer } from "./areaSlice";

export const store = configureStore({
  reducer: {
    meal: MealReducer,
    preferiti:preferiteReducer,
    theme:themeReducer,
    area:areaReducer
  },
});

export type State = ReturnType<typeof store.getState>;
