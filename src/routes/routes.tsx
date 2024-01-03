import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Navigate } from "react-router-dom";
import AboutUs from "../pages/common/AboutUs";
import CreateClient from "../pages/private/Client/Create";
import EditClient from "../pages/private/Client/Edit";
import ListClient from "../pages/private/Client/List";
import Dashboard from "../pages/private/Dashboard";
import ForgotPassword from "../pages/public/ForgotPassword";
import SignIn from "../pages/public/SignIn";
import SignUp from "../pages/public/SignUp";

export const commonRoutes = [
    {
        path: "/",
        element: <Navigate to="/sign-in" />,
    },
    {
        path: "about-us",
        element: <AboutUs />,
    },
];

export const publicRoutes = [
    {
        path: "sign-in",
        element: <SignIn />,
    },
    {
        path: "sign-up",
        element: <SignUp />,
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />,
    },
];

export const privateRoutes = [
    {
        path: "",
        element: <Dashboard />,
        title: "Dashboard",
        icon: <DonutLargeIcon />,
    },
    {
        path: "client",
        title: "Client",
        icon: <PeopleAltIcon />,
        children: [
            {
                path: "",
                element: <ListClient />,
            },
            {
                path: "edit",
                element: <EditClient />,
            },
            {
                path: "create",
                element: <CreateClient />,
            },
        ],
    },
];
