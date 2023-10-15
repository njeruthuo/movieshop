import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { memo } from "react";

function Text({}) {
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem 0",
    };

    const responsiveStyles = {
        fontSize: {
            "@media (max-width: 768px)": {
                fontWeight: "bold",
                fontSize: "20px",
            },
        },
    };

    return (
        <Box sx={styles}>
            <Typography
                variant="h3"
                element="h1"
                sx={responsiveStyles.fontSize}
            >
                Featured Movie
            </Typography>
            <Box sx={styles}>
                <Typography color="error">See more</Typography>
                <IconButton sx={{ color: "red" }}>
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
export default memo(Text);
