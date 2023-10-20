import { Box, Button, IconButton, Typography } from "@mui/material";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import { memo } from "react";

const MoreDetails = () => {
    return (
        <>
            <Box
                className="align-left"
                sx={{
                    display: "flex",
                    placeItems: "center",
                    marginRight: "auto",
                }}
            >
                <IconButton aria-label="| 350k">
                    <StarBorderPurple500OutlinedIcon />
                </IconButton>
                <Typography sx={{ marginLeft: "1rem" }}>|350k</Typography>
            </Box>

            <Box
                sx={{
                    marginLeft: "auto",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Button
                    sx={{ width: "100%", padding: "0.5rem" }}
                    variant="contained"
                    color="error"
                    aria-label="Ticket"
                >
                    <ConfirmationNumberOutlinedIcon />
                    <Typography sx={{ marginLeft: "0.5rem" }}>
                        See ShowTimes
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    marginLeft: "auto",
                    display: "flex",
                    marginTop: "0.4rem",
                    width: "100%",
                }}
            >
                <Button
                    sx={{
                        width: "100%",
                        borderColor: "red",
                        color: "black",
                        padding: "0.5rem",
                    }}
                    variant="outlined"
                    aria-label="Ticket"
                >
                    <ListOutlinedIcon />
                    <Typography sx={{ marginLeft: "0.5rem" }}>
                        Watch More Options
                    </Typography>
                </Button>
            </Box>
        </>
    );
};

export default memo(MoreDetails);
