import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import PageNotFound from "../pages/common/404";
import { commonRoutes, privateRoutes, publicRoutes } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <PageNotFound />,
        children: commonRoutes.map((route) => {
            return route;
        }),
    },
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <PageNotFound />,
        children: publicRoutes.map((route) => {
            return route;
        }),
    },
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        errorElement: <PageNotFound />,
        children: privateRoutes.map((route) => {
            return route;
        }),
    },
]);

export default router;
