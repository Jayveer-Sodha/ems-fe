import { Box, Card, Grid, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import TimelineItem from "./Timeline";

const useStyles = makeStyles((theme) => ({
  Card: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    height: "510px",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const UpcomingBirthdays = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.Card}>
        <Grid sm={12}>
          <Box pt={3} px={3}>
            <Typography variant="h6" fontWeight="medium" color="secondary">
              Upcoming Birthdays
            </Typography>
            <Box mt={0} mb={2}>
              <Typography variant="body1" color="default">
                January to March
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          container
          sm={12}
          style={{
            height: "100%",
            overflowY: "scroll",
            padding: "2px",
          }}
        >
          <Box mt={2} mb={15} style={{ width: "100%" }}>
            <TimelineItem title="user one" dateTime="2nd January" />
            <TimelineItem title="user two" dateTime="18th January " />
            <TimelineItem title="user three" dateTime="21st February " />
            <TimelineItem title="user three" dateTime="21st February " />
            <TimelineItem title="user three" dateTime="21st February " />
            <TimelineItem title="user four" dateTime="18th March " lastItem />
          </Box>
        </Grid>
      </Card>
    </div>
  );
};

export default UpcomingBirthdays;
