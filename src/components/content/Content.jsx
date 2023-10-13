import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

import Poster from "./Poster";

const Content = () => {
    return (
        <Box>
            <Box className="movie-poster">
                <Poster />
            </Box>
        </Box>
    );
};

export default Content;
