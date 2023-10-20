import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Description from "../components/content/movies/Description";

const Description = ({
    title,
    adult,
    hours,
    minutes,
    widthLessThanSmall,
    overview,
}) => {
    return (
        <>
            <Box
                sx={{
                    margin: "0 0 1rem 0",
                }}
            >
                <Typography
                    variant="p"
                    sx={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "12px",
                    }}
                >
                    {title} &#183; {new Date(release_date).getFullYear()} &#183;
                    {adult ? "" : "PG-13"} &#183;
                    {` ${hours}h ${minutes}m `}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "11px",
                        margin: "1rem 0.2rem",
                        width: widthLessThanSmall ? "100%" : "395px",
                    }}
                >
                    {overview}
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{
                        margin: "0.5rem 0",
                        fontSize: "11px",
                    }}
                >
                    Director:{" "}
                    <span
                        style={{
                            color: "red",
                        }}
                    >
                        Joseph Kosinski
                    </span>
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        margin: "0.5rem 0",
                        fontSize: "11px",
                    }}
                >
                    Writers:
                    <span
                        style={{
                            color: "red",
                        }}
                    >
                        Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        margin: "0.5rem 0",
                        fontSize: "11px",
                    }}
                >
                    Stars:
                    <span
                        style={{
                            color: "red",
                        }}
                    >
                        Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                    margin: "1rem",
                }}
            >
                <Button color="error" variant="contained">
                    Top Rated movie #65
                </Button>
                <Typography variant="p">Awards 9 nominations</Typography>
            </Box>
        </>
    );
};
export default Description;
