import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawerOpen: false,
    searchFullWidth: false,
};

const generalSlice = createSlice({
    name: "generalStates",
    initialState,
    reducers: {
        toggleDrawer: (state, action) => {
            
            state.drawerOpen = !state.drawerOpen;
        },

        toggleSearchFullWidth: (state, action) => {
            state.searchFullWidth = !state.searchFullWidth;
        },
    },
});

export const { toggleDrawer, toggleSearchFullWidth } = generalSlice.actions;

export default generalSlice.reducer;
