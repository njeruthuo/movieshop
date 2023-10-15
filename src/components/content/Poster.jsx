import { Box, Button, IconButton, Typography } from "@mui/material";
import useDataFetch from "./datafetch";
import { memo } from "react";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import Statistics from "./Statistics";

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
                <Statistics
                    popularity={popularity}
                    vote_count={vote_count}
                    overview={overview}
                />
                <Box>
                    <Typography color="white">{overview}</Typography>
                </Box>
                <Box sx={{ paddingTop: "1rem" }}>
                    <Button
                        variant="contained"
                        color="error"
                        style={{
                            // color: "error",
                            padding: "8px",
                        }}
                    >
                        <PlayCircleFilledWhiteRoundedIcon />
                        <Typography
                            style={{ fontWeight: "bold", marginLeft: "0.5rem" }}
                        >
                            Watch Trailer
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(Poster);

function Title({ title }) {
    return (
        <Box>
            <Typography sx={{ lineHeight: "3rem" }} variant="h3" color="white">
                {title}
            </Typography>
        </Box>
    );
}
