import { configureStore } from "@reduxjs/toolkit";

import { MealReducer } from "./ricetteSlice";
import { preferiteReducer } from "./preferitiSlice";



export const store = configureStore({
  reducer: {
    meal: MealReducer,
    preferiti:preferiteReducer
  },
});

export type State = ReturnType<typeof store.getState>;
