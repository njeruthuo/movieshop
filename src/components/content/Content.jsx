import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieList } from "./movies/MovieList";

import Poster from "./Poster";

const Content = () => {
    return (
        <Box>
            <Box className="movie-poster">
                <Poster />
                <MovieList />
            </Box>
        </Box>
    );
};

export default Content;
