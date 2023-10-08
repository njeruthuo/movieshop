import { Box, Typography } from "@mui/material";
import { metadata } from "../../consts/data";

const MetaComponent = () => {
    return (
        <Box className="meta">
            {metadata.map((data, index) => (
                <Typography key={index} variant="h6" component="p">
                    {data}
                </Typography>
            ))}
        </Box>
    );
};

export default MetaComponent;
