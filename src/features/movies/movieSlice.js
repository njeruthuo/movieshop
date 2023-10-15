import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MOVIELIST_URL } from "../../consts/data";

export const getMovieList = createAsyncThunk("movie/getMovieList", async () => {
    try {
        const response = await fetch(MOVIELIST_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error; // This will be handled in the "getMovieList.rejected" action
    }
});

const initialState = {
    movieList: [],
    isLoading: false,
    isError: false,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovieList.pending]: (state) => {
            state.isLoading = true;
            state.isError = false; // Reset the error flag when a new request is initiated
        },
        [getMovieList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false; // Reset the error flag when data is successfully fetched
            state.movieList = action.payload.results;
        },
        [getMovieList.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true; // Set the error flag when an error occurs
        },
    },
});

export const selectAllMovies = (state) => state.movies;

export default movieSlice.reducer;
