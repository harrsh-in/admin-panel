import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
    return (
        <div>
            <h1>Private page</h1>

            <Outlet />
        </div>
    );
};

export default PrivateLayout;
