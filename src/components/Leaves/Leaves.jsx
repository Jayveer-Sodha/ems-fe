import {
  Box,
  Button,
  Divider,

  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    padding: theme.spacing(2),
    height: 165,
  },
  box: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(2),
  },
}));

const Leaves = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box className={classes.box}>
        <Grid sm={6} xs={12}>
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            sx={{ fontWeight: "600" }}
          >
            8
          </Typography>
          <Typography
            variant="body1"
            color="default"
            align="center"
            sx={{ fontWeight: "600" }}
          >
            LEAVE TAKEN
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid sm={6} xs={12}>
          <Typography
            variant="h4"
            color="secondary"
            align="center"
            sx={{ fontWeight: "600" }}
          >
            4
          </Typography>
          <Typography
            variant="body1"
            color="default"
            align="center"
            sx={{ fontWeight: "600" }}
          >
            REMAINING LEAVES
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
          m: 2,
        }}
      >
        <Button sx={{ mx: 1 }} size="large" variant="contained">
          Apply Leave
        </Button>
        <Button sx={{ mx: 1 }} size="large" variant="contained">
          View Leaves
        </Button>
      </Box>
    </Paper>
  );
};

export default Leaves;
