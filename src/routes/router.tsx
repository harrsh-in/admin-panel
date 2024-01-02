import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import PageNotFound from "../pages/common/404";
import AboutUs from "../pages/common/AboutUs";
import Dashboard from "../pages/private/Dashboard";
import ForgotPassword from "../pages/public/ForgotPassword";
import SignIn from "../pages/public/SignIn";
import SignUp from "../pages/public/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Navigate to="/sign-in" />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
        ],
    },
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <PageNotFound />,
        children: [
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
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
