import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownCircleOutlined,
} from "@mui/icons-material";
import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import ProfileImage from "assets/profile.jpeg";
import { useState } from "react";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* left side */}
                <FlexBetween>
                    <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        sx={{ marginRight: ".5rem" }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="8px"
                        gap="3rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />

                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* right side */}
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>

                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
