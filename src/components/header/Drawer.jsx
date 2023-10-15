import React, { memo, useState } from "react";
import { Divider, Drawer } from "@mui/material";

import { drawerOptions } from "../../consts/data";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const styles = {
    padding: 1,
};

const DrawerComponent = ({ open, setOpen }) => {
    return (
        <>
            <Drawer sx={{ styles }} open={open} onClose={() => setOpen(false)}>
                <List>
                    {drawerOptions.map((option, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={option.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default memo(DrawerComponent);
