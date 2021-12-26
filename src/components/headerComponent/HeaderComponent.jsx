import { Grid } from "@material-ui/core";
import React from "react";
import BodyContainer from "../bodyComponent/BodyContainer";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HeaderComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container className={classes.container}>
        <Leftbar />
        <main className={classes.content}>
          <BodyContainer />
        </main>
      </Grid>
    </div>
  );
};

export default HeaderComponent;
