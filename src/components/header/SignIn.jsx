import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { memo } from "react";

function SignIn({ setOpen, open }) {
    return (
        <Box className="icons-title">
            <Typography
                style={{
                    marginRight: "1rem",
                }}
            >
                Sign in
            </Typography>
            <IconButton
                onClick={() => setOpen(!open)}
                style={{
                    color: "white",
                    height: "0.2rem",
                }}
            >
                <MenuIcon className="menu-icons" />
            </IconButton>
        </Box>
    );
}

export default memo(SignIn);
