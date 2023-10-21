import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Text from "../Text";

const MovieList = () => {
    const { movieList, isLoading, isError } = useSelector(
        (state) => state.movies
    );

    

    if (isLoading) {
        return (
            <Container>
                <Typography>Loading....</Typography>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <Typography>Error loading movies</Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ marginBottom: "3rem" }}>
            <Text />
            <Box>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {movieList?.map((movie, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <MovieCard {...movie} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default MovieList;
