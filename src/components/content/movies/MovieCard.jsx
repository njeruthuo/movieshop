import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { IMAGE_BASE_URL, genres } from "../../../consts/data";
import Statistics from "../Statistics";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";

const MovieCard = ({
    id,
    title,
    genre_ids,
    poster_path,
    popularity,
    vote_count,
    release_date,
}) => {
    const [fav, setFav] = useState(false);
    const genre_list = genre_ids.map((genre) => {
        const matchingObj = genres.find((item) => item.id == genre);
        return matchingObj ? matchingObj.name : null;
    });

    return (
        <Paper sx={{ position: "relative" }} elevation={2}>
            <Box>
                <img
                    style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                    src={IMAGE_BASE_URL + poster_path}
                    alt={title}
                    width="100%"
                />
            </Box>
            <Box sx={{ padding: "0.2rem" }}>
                <Box>
                    <Typography
                        sx={{
                            color: "gray",
                            fontSize: "12px",
                            fontWeight: "bolder",
                        }}
                    >{`USA, ${new Date(
                        release_date
                    ).getFullYear()}`}</Typography>
                    <Link to={`/${id}`}>
                        <Typography variant="h6" sx={{ fontSize: "17px" }}>
                            {title}
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Statistics
                        vote_count={vote_count}
                        popularity={popularity}
                        color="black"
                    />
                </Box>
                <Box sx={{ display: "flex" }}>
                    {genre_list.map((genre) => {
                        return (
                            <Typography
                                sx={{
                                    margin: "1px 2px",
                                    color: "gray",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}
                            >
                                {genre}
                            </Typography>
                        );
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "white",
                    borderRadius: "50%",
                }}
            >
                <IconButton onClick={() => setFav(!fav)}>
                    {fav ? (
                        <FavoriteOutlinedIcon />
                    ) : (
                        <FavoriteBorderOutlinedIcon />
                    )}
                </IconButton>
            </Box>
        </Paper>
    );
};

export default MovieCard;
