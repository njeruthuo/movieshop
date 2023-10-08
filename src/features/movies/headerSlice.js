import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TOP_MOVIE_DETAIL_URL } from "../../consts/data";

const initialState = {
    movie: [],
    isLoading: true,
};

const getDisplayMovie = createAsyncThunk("movie/getDisplayMovie", () => {
    return fetch(TOP_MOVIE_DETAIL_URL)
        .then((resp) => resp.json())
        .then((err) => console.log(err));
});

const headerSlice = createSlice({
    name: "displayMovie",
    initialState,
    extraReducers: {
        [getDisplayMovie.pending]: (state) => {
            state.isLoading = true;
        },
        [getDisplayMovie.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.movie = action.payload;
        },
        [getDisplayMovie.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const selectMovie = (state) => state.movie;

export default headerSlice.reducer;
