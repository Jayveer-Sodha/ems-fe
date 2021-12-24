import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Brightness2, Brightness5 } from "@material-ui/icons";
import { ColorModeContext } from "./ColorModeContext";
import { Box } from "@material-ui/core";

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
  },
}));

const Navbar = () => {
  const { toggleMode, darkMode } = React.useContext(ColorModeContext);
  const icon = !darkMode ? <Brightness5 /> : <Brightness2 />;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.rightDiv}>
            <IconButton color="inherit" aria-label="mode" onClick={toggleMode}>
              {icon}
            </IconButton>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
