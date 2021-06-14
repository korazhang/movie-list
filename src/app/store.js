import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import movieListReducer from "../features/movieList/MovieListSlice";

export const store = configureStore({
  reducer: {
    movieList: movieListReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
