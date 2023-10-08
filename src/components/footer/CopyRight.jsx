import { Box, Typography } from "@mui/material";

const CopyRightComponent = () => {
    const date = new Date().getFullYear();
    return (
        <Box className="copyright">
            <Typography sx={{ fontWeight: 700, fontSize: "0.8rem" }}>
                &copy;{date} MovieBox by Julius N. Thuo
            </Typography>
        </Box>
    );
};

export default CopyRightComponent;
