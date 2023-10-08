import "./header.css";
import FullSearch from "./FullSearch";
import { useSelector } from "react-redux";
import React, { createContext, memo, useContext, useState } from "react";
import HeaderLowerBreakpoint from "./HeaderLowerBreakpoint";
import HeaderHigherBreakpoint from "./HeaderHigherBreakpoint";
import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import DrawerComponent from "./Drawer";

// Context API

const Header = () => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const { searchFullWidth } = useSelector((state) => state.general);

    // Responsiveness control
    const theme = useTheme();
    const isBelowSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {isBelowSM ? (
                        <>
                            {searchFullWidth ? (
                                <FullSearch
                                    search={search}
                                    setSearch={setSearch}
                                />
                            ) : (
                                <HeaderLowerBreakpoint
                                    search={search}
                                    setSearch={setSearch}
                                    setOpen={setOpen}
                                    open={open}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <HeaderHigherBreakpoint
                                search={search}
                                setSearch={setSearch}
                                setOpen={setOpen}
                                open={open}
                            />
                        </>
                    )}
                    <DrawerComponent open={open} setOpen={setOpen} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default memo(Header);
