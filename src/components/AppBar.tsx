import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { Fragment, useState } from "react";
import SideBar from "./SideBar";

const AppBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleToggleSideBar =
        (flag: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setIsSideBarOpen(flag);
        };

    return (
        <Fragment>
            <SideBar
                handleToggleSideBar={handleToggleSideBar}
                isSideBarOpen={isSideBarOpen}
            />

            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <MuiAppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleToggleSideBar(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}
                        >
                            Admin
                        </Typography>
                    </Toolbar>
                </MuiAppBar>
                <Toolbar />
            </Box>
        </Fragment>
    );
};

export default AppBar;
