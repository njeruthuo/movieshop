import "./header.css";
import FullSearch from "./FullSearch";
import DrawerComponent from "./Drawer";
import { useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import HeaderLowerBreakpoint from "./HeaderLowerBreakpoint";
import HeaderHigherBreakpoint from "./HeaderHigherBreakpoint";
import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";

// Context API

const Header = () => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const { searchFullWidth } = useSelector((state) => state.general);

    // Responsiveness control
    const theme = useTheme();
    const isBelowSM = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Check the current scroll position
            const scrollY = window.scrollY;
            // Determine if the header should be visible based on scroll position
            setIsHeaderVisible(scrollY <= window.innerHeight);
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerStyles = {
        position: "fixed",
        top: 0,
        bottom: "calc(100vh - 1px)", // Subtract 1px to avoid potential scrolling issues
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderBottom: "none",
        zIndex: 1, // Ensure the header is above other content
        display: isHeaderVisible ? "block" : "none",
    };

    return (
        <div>
            <AppBar sx={headerStyles}>
                <Toolbar>
                    {isBelowSM ? (
                        <>
                            {open ? (
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
                    <DrawerComponent
                        drawerOpen={drawerOpen}
                        setDrawerOpen={setDrawerOpen}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default memo(Header);
