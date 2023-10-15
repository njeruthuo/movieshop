import { Box, Typography } from "@mui/material";
import { IMDB_Logo, tomato } from "../../consts/context";

function Statistics({ popularity, vote_count, color }) {
    const fontStyles = {
        fontWeight: "lighter",
        fontSize:'12px'
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                color: color || "white",
                width: color || "50%",
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
                <Typography sx={fontStyles}>{`${Math.floor(popularity).toFixed(
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
                <Typography sx={fontStyles}>{`${Math.round(
                    vote_count / 100
                )}%`}</Typography>
            </Box>
        </Box>
    );
}
export default Statistics;
