import { Box } from "@mui/material";
import SocialHandles from "./SocialHandles";
import CopyRightComponent from "./CopyRight";
import MetaComponent from "./Meta";
import "./footer.css";

const Footer = () => {
    return (
        <Box className="footer-container">
            <SocialHandles />
            <MetaComponent />
            <CopyRightComponent />
        </Box>
    );
};

export default Footer;
