import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    shortlistedMovies: moviesReducer,
  },
});

export default store;
