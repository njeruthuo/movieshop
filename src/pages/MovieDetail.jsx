import "./detail.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PermanentDrawerLeft from "../components/details/DrawerComponent";
import { useMediaQuery, useTheme } from "@mui/material";
import MoreDetails from "../components/content/movies/MoreDetails";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL, genres } from "../consts/data";

const MovieDetail = () => {
    const { id } = useParams();

    const { movieList, isLoading, isError } = useSelector(
        (state) => state.movies
    );

    const selectedMovie = movieList.find((movie) => movie.id === parseInt(id));
    const { title, overview, release_date, adult, genre_ids, poster_path } =
        selectedMovie;

    const theme = useTheme();
    const widthLessThanMedium = useMediaQuery(theme.breakpoints.up("md"));
    const widthLessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const styles = {
        width: "90%",
        margin: "auto",
        marginTop: "1.2rem",
        paddingLeft: widthLessThanMedium ? "8rem" : "",
    };

    const spaceStyles = {
        marginRight: widthLessThanMedium ? "320px" : "0",
    };

    const genre_list = genre_ids.map((item) => {
        const genre_item = genres.find((genre) => genre.id === item);
        return genre_item ? genre_item.name : null;
    });

    const combined_genres = genre_list.join(", ");

    console.log(genre_list);

    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

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
        <Container>
            <Box sx={spaceStyles}>
                {widthLessThanMedium && <PermanentDrawerLeft />}
            </Box>
            <Box sx={styles}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <img
                        style={{
                            borderRadius: "1rem",
                            width: widthLessThanSmall ? "100%" : "80%",
                            height: "60vh",
                        }}
                        src={IMAGE_BASE_URL + poster_path}
                        alt={title}
                        // height="25vh"
                    />
                    <Box
                        sx={{
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "absolute",
                            bottom: "50%",
                            top: "50%",
                        }}
                    >
                        <IconButton
                            sx={{ color: "white", background: "#FF4FF7" }}
                        >
                            <PlayArrowRoundedIcon />
                        </IconButton>
                        <Typography sx={{ marginTop: "1rem" }}>
                            Watch Trailer
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: "2rem",
                        margin: widthLessThanMedium ? "1rem 7rem" : "",
                    }}
                >
                    <Grid container>
                        <Grid item xs={12} md={8}>
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
                                        {title} &#183;{" "}
                                        {new Date(release_date).getFullYear()}{" "}
                                        &#183;
                                        {adult ? "" : "PG-13"} &#183;{" "}
                                        {combined_genres}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "11px",
                                            margin: "1rem 0.2rem",
                                            width: widthLessThanSmall
                                                ? "100%"
                                                : "395px",
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
                                        <span style={{ color: "red" }}>
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
                                        <span style={{ color: "red" }}>
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
                                        <span style={{ color: "red" }}>
                                            Tom Cruise, Jennifer Connelly, Miles
                                            Teller
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
                                    <Typography variant="p">
                                        Awards 9 nominations
                                    </Typography>
                                </Box>
                            </>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <MoreDetails />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default MovieDetail;
