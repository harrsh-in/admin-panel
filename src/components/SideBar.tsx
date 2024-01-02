import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { privateRoutes } from "../routes/routes";
import { Link } from "react-router-dom";

const SideBar = ({ handleToggleSideBar, isSideBarOpen }: IProps) => {
    return (
        <Drawer
            anchor="left"
            open={isSideBarOpen}
            onClose={handleToggleSideBar(false)}
        >
            <Box
                sx={{
                    width: 250,
                }}
                role="presentation"
                onClick={handleToggleSideBar(false)}
                onKeyDown={handleToggleSideBar(false)}
            >
                <List className="sidebar">
                    {privateRoutes.map((route, index) => (
                        <Link
                            key={index}
                            to={route.path}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{route.icon}</ListItemIcon>
                                    <ListItemText primary={route.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideBar;

interface IProps {
    isSideBarOpen: boolean;
    handleToggleSideBar: (
        flag: boolean,
    ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
