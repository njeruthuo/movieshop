import { Grid } from "@mui/material";

import SignIn from "./SignIn";
import IconAndTitle from "./IconAndTitle";
import SearchBar from "./SearchBar";
import { memo } from "react";

export function HeaderHigherBreakpoint({ search, setSearch, setOpen, open }) {
    return (
        <Grid sx={{ placeItems: "center" }} container className="appbar">
            <Grid item lg={3} sm={3}>
                <IconAndTitle />
            </Grid>
            <Grid item lg={6} sm={4}>
                <SearchBar search={search} setSearch={setSearch} />
            </Grid>
            <Grid item lg={3} sm={3}>
                <SignIn setOpen={setOpen} open={open} />
            </Grid>
        </Grid>
    );
}

export default memo(HeaderHigherBreakpoint);
