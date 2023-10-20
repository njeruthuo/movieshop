import { Box, IconButton, Typography } from "@mui/material";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

function TitleIcon({}) {
    return (
        <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton
                style={{
                    color: "white",
                    marginRight: "1rem",
                }}
            >
                <ConnectedTvIcon className="menu-icons" />
            </IconButton>
            <Typography variant="p" component="h3">
                MovieBox
            </Typography>
        </Box>
    );
}

export default TitleIcon;
