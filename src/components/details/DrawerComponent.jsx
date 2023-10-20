import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { detailDrawer } from "../../consts/context";
import TitleIcon from "./TitleIcon";

const drawerWidth = "20%";

export default function PermanentDrawerLeft() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                marginLeft: 0, // Add margin to create space
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    border: "1px solid gray",
                    borderBottomRightRadius: "50px",
                    borderTopRightRadius: "50px",
                    marginTop: "0.2rem",
                    marginBottom: "0.4rem",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <TitleIcon />
            <Divider />
            <List>
                {detailDrawer.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icons}</ListItemIcon>
                            <ListItemText primary={item.name} />
                            <Divider />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
