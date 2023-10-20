import "./detail.css";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import PermanentDrawerLeft from "../components/details/DrawerComponent";
import { useMediaQuery, useTheme } from "@mui/material";
import useDataFetch from "../components/content/datafetch";
import { genres as list_genres } from "../consts/data";
import MoreDetails from "../components/content/movies/MoreDetails";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const MovieDetail = () => {
    const { headerData, bg } = useDataFetch();
    const {
        title,
        popularity,
        vote_count,
        overview,
        release_date,
        runtime,
        adult,
        genres,
        tagline,
    } = headerData;

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

    const hours = Math.floor(runtime / 60); // Get the whole hours
    const minutes = runtime % 60; // Get the remaining minutes

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
                        }}
                        src={bg}
                        alt={title}
                        height="80%"
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
                                        {adult ? "" : "PG-13"} &#183;
                                        {` ${hours}h ${minutes}m `}
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
