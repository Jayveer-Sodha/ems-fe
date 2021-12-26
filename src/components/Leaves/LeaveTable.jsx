import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Delete, Edit } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
  },
}));

function createData(type, daysCount, status) {
  return {
    type,
    daysCount: ` ${daysCount} days`,
    status,
    moreDetails: [
      {
        From: "2020-01-05",
        To: "2020-01-05",
        Reason: "family occasion",
        ApprovedBy: "Admin",
      },
    ],
  };
}

const rows = [
  createData("Medical Leave", 2, "Pending"),
  createData("Casual Leave", 1, "Pending"),
  createData("Maternity Leave", 15, "Pending"),
  createData("Paternity Leave", 7, "Pending"),
];

export default function CollapsibleTable() {
  const classes = useStyle();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              <Typography
                variant="button"
                style={{ fontWeight: "600", fontSize: "22px" }}
                color="secondary"
              >
                Leave Details
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography
                variant="button"
                style={{ fontWeight: "600", fontSize: "17px" }}
              >
                Leave Type
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                variant="button"
                style={{ fontWeight: "600", fontSize: "17px" }}
              >
                No of Days
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                variant="button"
                style={{ fontWeight: "600", fontSize: "17px" }}
              >
                Status
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                variant="button"
                style={{ fontWeight: "600", fontSize: "17px" }}
              >
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.type} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.type}
        </TableCell>
        <TableCell align="right">{row.daysCount}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around ",
              width: "50%",
              marginLeft: "auto",
            }}
          >
            <IconButton aria-label="expand row" size="small">
              <Delete />
            </IconButton>

            <IconButton aria-label="expand row" size="small">
              <Edit />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Paper>
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              style={{
                borderRadius: "10px",
                margin: " 10px 0 10px 0",
                padding: "5px",
              }}
            >
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  More Details
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Reason</TableCell>
                      <TableCell>Approved By</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.moreDetails.map((Details) => (
                      <TableRow key={Details.From}>
                        <TableCell component="th" scope="row">
                          {Details.From}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {Details.To}
                        </TableCell>
                        <TableCell>{Details.Reason}</TableCell>
                        <TableCell>{Details.ApprovedBy}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </Paper>
        </TableCell>
      </TableRow>
    </>
  );
};

export { Row };
