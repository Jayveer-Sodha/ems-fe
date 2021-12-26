import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    display: "flex",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const WelcomeUser = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Avatar
        className={classes.avatar}
        alt="Remy Sharp"
        src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0="
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          pl: 2,
        }}
      >
        <Typography variant="h5" color="secondary" align="center">
          Welcome User
        </Typography>
        <Typography variant="subtitle1" color="default" align="center">
          {new Date().toDateString()}
        </Typography>
      </Box>
    </Paper>
  );
};

export default WelcomeUser;
