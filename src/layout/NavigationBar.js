import { Add, ExpandLess, ExpandMore, Logout } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../assets/logo.png";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const Sidebar = () => {
  const navigate = useNavigate();

  const [openSlide, setOpenSlide] = useState(true);
  const [openCollapse, setOpenCollapse] = useState({});

  const handleCollapse = (navLink) => {
    setOpenCollapse((prevState) => ({
      ...prevState,
      [navLink]: !prevState[navLink],
    }));
  };

  const all_Data = [
    {
      navLink: "/dashboard",
      navIcon: <SlideshowIcon />,
      navItem: "Dashboard",
    },
    {
      navLink: "/add-movie",
      navIcon: <SlideshowIcon />,
      navItem: "Add Movie",
    },
    {
      navLink: "/all-movies-list",
      navIcon: <SlideshowIcon />,
      navItem: "All Movies",
    },
    {
      navLink: "/admin/login",
      navIcon: <Logout />,
      navItem: "Logout",
    },
  ];
  return (
    <List
      className={`${
        openSlide ? "!min-w-[16vw] max-w-[16vw]" : "!w-auto"
      }  shadow-md   !h-screen  !relative !overflow-y-auto !p-2 glass`}
    >
      <ListItem className="!py-3 !flex !justify-center">
        {openSlide ? (
          <img alt="" className="Capture !w-32" src={loginLogo} />
        ) : (
          <img alt="" className="Capture !w-14 py-8" src={loginLogo} />
        )}
      </ListItem>
      <Divider />

      {all_Data?.map((nav) => (
        <React.Fragment key={nav.id}>
          <ListItemButton
            onClick={() => {
              if (nav.navItem === "Logout") {
                localStorage.clear();
                navigate("/admin/login");
              } else navigate(nav.navLink);
            }}
            className={classNames(
              "!rounded-lg !p-2",
              window.location.pathname === nav.navLink && "!text-[#0561FC]"
            )}
          >
            <ListItemIcon>{nav.navIcon}</ListItemIcon>
            <ListItemText primary={nav.navItem} />
          </ListItemButton>
        </React.Fragment>
      ))}
    </List>
  );
};

export default Sidebar;
