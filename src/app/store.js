import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import headerReducer from "../features/movies/headerSlice";
import generalReducer from "../features/general/generalSlice";

export const store = configureStore({
    reducer: {
        general: generalReducer,
        movies: movieReducer,
        movie: headerReducer,
    },
});
