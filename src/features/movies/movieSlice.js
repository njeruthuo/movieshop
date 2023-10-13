import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MOVIELIST_URL } from "../../consts/data";

export const getMovieList = createAsyncThunk("movie/getMovieList", () => {
    return fetch(MOVIELIST_URL).then((resp) => resp.json());
});

const initialState = {
    movieList: [],
    isLoading: true,
    isError: false,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovieList.pending]: (state) => {
            state.isLoading = true;
        },
        [getMovieList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movieList = action.payload;
        },
        [getMovieList.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const selectAllMovies = (state) => state.movies;

export default movieSlice.reducer;
