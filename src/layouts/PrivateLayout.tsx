import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Box from "@mui/material/Box";

const PrivateLayout = () => {
    return (
        <Box
            sx={{
                px: 2,
            }}
        >
            <AppBar />

            <Outlet />
        </Box>
    );
};

export default PrivateLayout;
