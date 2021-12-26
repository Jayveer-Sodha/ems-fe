import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Brightness2, Brightness5, Notifications } from "@material-ui/icons";
import { Context } from "../../context/Context";
import { Avatar, Badge, Box } from "@material-ui/core";
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  rightDiv: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  icons: {
    marginRight: theme.spacing(2),
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
}));

const Navbar = () => {
  const { toggleMode, darkMode, open, handleDrawerOpen } =
    React.useContext(Context);
  console.log(darkMode);
  const icon = !darkMode ? <Brightness5 /> : <Brightness2 />;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.rightDiv}>
            <IconButton
              className={classes.icons}
              color="inherit"
              aria-label="mode"
              onClick={toggleMode}
            >
              {icon}
            </IconButton>
            <IconButton
              className={classes.icons}
              color="inherit"
              aria-label="mode"
            >
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.icons}
              color="inherit"
              aria-label="mode"
            >
              <Avatar
                alt="user"
                src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0="
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
