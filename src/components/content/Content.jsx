import { Box, Container } from "@mui/material";
import React from "react";
import MovieList from "./movies/MovieList";

import Poster from "./Poster";

const Content = () => {
    return (
        <Box sx={{ zIndex: 10 }} className="movie-poster">
            <Poster />
            <MovieList />
        </Box>
    );
};

export default Content;
