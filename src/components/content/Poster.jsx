import { Box, Button, IconButton, Typography } from "@mui/material";
import useDataFetch from "./datafetch";
import { IMDB_Logo, tomato } from "../../consts/context";
import { memo } from "react";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";

const Poster = () => {
    const { headerData, bg } = useDataFetch();

    const { title, popularity, vote_count, overview } = headerData;

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${bg})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",

                "@media (max-width: 768px)": {
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                },

                "@media (min-width: 768px) and (max-width: 1200px)": {
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${bg})`,
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",

                    "@media (max-width: 768px)": {
                        margin: "1.6rem",
                        fontSize: "0.4em",
                        bottom: "4rem",
                    },

                    "@media (min-width: 768px) ": {
                        left: "5rem",
                        width: "50%",
                        bottom: "5rem",
                    },
                }}
            >
                <Title title={title} />
                <Information
                    popularity={popularity}
                    vote_count={vote_count}
                    overview={overview}
                />
                <Box>
                    <Typography color="white">{overview}</Typography>
                </Box>
                <Box sx={{ paddingTop: "1rem" }}>
                    <Button color="error" variant="contained">
                        <IconButton
                            color="white"
                            style={{
                                color: "white",
                                borderRadius: "50%",
                                padding: "4px",
                            }}
                        >
                            <PlayCircleFilledWhiteRoundedIcon />
                        </IconButton>
                        <Typography style={{ fontWeight: "bold" }}>
                            Watch Trailer
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(Poster);

function Information({ popularity, vote_count }) {
    return (
        <Box
            sx={{
                display: "flex",
                color: "white",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    placeItems: "center",
                    alignContent: "center",
                    gap: 1,
                    marginRight: "3rem",
                    margin: "1rem 0",
                }}
            >
                <img
                    height="14px"
                    className="imdb-logo"
                    src={IMDB_Logo}
                    alt="IMDB_Logo"
                />
                <Typography>{`${Math.floor(popularity).toFixed(
                    1
                )} / 100`}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    placeItems: "center",
                    alignContent: "center",
                    gap: 1,
                    marginRight: "3rem",
                }}
            >
                <img
                    height="14px"
                    className="imdb-logo"
                    src={tomato}
                    alt="Rotten_Tomatoes"
                />
                <Typography>{`${Math.round(vote_count / 100)}%`}</Typography>
            </Box>
        </Box>
    );
}

function Title({ title }) {
    return (
        <Box>
            <Typography sx={{ lineHeight: "3rem" }} variant="h3" color="white">
                {title}
            </Typography>
        </Box>
    );
}
