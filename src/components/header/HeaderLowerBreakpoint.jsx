import { Grid, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import IconAndTitle from "./IconAndTitle";
import MenuIcon from "@mui/icons-material/Menu";

// Drawer State control

export function HeaderLowerBreakpoint({ search, setSearch, open, setOpen }) {
    return (
        <Grid sx={{ placeItems: "center" }} container className="appbar">
            <Grid item sm={3}>
                <IconAndTitle />
            </Grid>
            <Grid item sm={6} className="display-apart">
                <IconButton
                    onClick={() => {}}
                    style={{
                        color: "white",
                        marginLeft: "auto",
                    }}
                >
                    <SearchIcon />
                </IconButton>
                <IconButton
                    onClick={() => setOpen(!open)}
                    style={{
                        color: "white",
                        height: "0.2rem",
                    }}
                >
                    <MenuIcon className="menu-icons" />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default HeaderLowerBreakpoint;
