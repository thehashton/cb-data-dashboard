import * as React from "react";
import { CSSObject, Theme, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import scss from "./Sidemenu.module.scss";
import Drawer from "@mui/material/Drawer";
import NextLink from "next/link";
import { useMediaQuery } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import { Settings } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const drawerWidth = 240;

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  const menuRouteList = ["data", "profile", "settings", ""];
  const menuListTranslations = ["Data", "Profile", "Settings", "Sign Out"];
  const menuListIcons = [
    <HomeIcon />,
    <Person2Icon />,
    <Settings />,
    <ExitToAppIcon />,
  ];
  const mobileCheck = useMediaQuery("(min-width: 600px)");
  const wideMonitor = useMediaQuery("(min-width: 1700px)");

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className={scss.sideMenu}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          top: mobileCheck ? 64 : 57,
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className={scss.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink
              className={scss.link}
              href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideMenu;
