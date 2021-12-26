import { Box, Grid, Typography } from "@material-ui/core";

import React from "react";
import BodyComponent from "./BodyComponent";
import WelcomeUser from "../welcomeUser/WelcomeUser";
import Leaves from "../Leaves/Leaves";
import UpcomingBirthdays from "../upcomingBirthday/UpcomingBirthdays";
import CollapsibleTable from "../Leaves/LeaveTable";
import { makeStyles } from "@material-ui/styles";
import FirebaseLogin from "../Login/Login";
const useStyle = makeStyles((theme) => ({
  Body: {},
}));

const BodyContainer = () => {
  const classes = useStyle();
  return (
    <Box className={classes.Body}>
      <BodyComponent>
        <Grid spacing={3} p={2} md={12} lg={12} sm={12} container>
          <Grid sm={12} item>
            <WelcomeUser />
          </Grid>
          <Grid sm={8} item>
            <CollapsibleTable />
          </Grid>
          <Grid sm={4} item>
            <Leaves />
            <br />
            <UpcomingBirthdays />
          </Grid>
        </Grid>
        <FirebaseLogin />
      </BodyComponent>
    </Box>
  );
};

export default BodyContainer;
