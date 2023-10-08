import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton } from "@mui/material";

const SocialHandles = () => {
    const styles = {
        color: "black",
    };
    return (
        <Box className="socialHandles">
            <IconButton sx={styles}>
                <FacebookIcon />
            </IconButton>
            <IconButton sx={styles}>
                <InstagramIcon />
            </IconButton>
            <IconButton sx={styles}>
                <TwitterIcon />
            </IconButton>
            <IconButton sx={styles}>
                <YouTubeIcon />
            </IconButton>
        </Box>
    );
};

export default SocialHandles;
