import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./RoomReceipt.styles";

function RoomReceipt(props) {
  console.log("Props:", props);
  const classes = useStyles();
  const data = props.location.state;

  const parseDateToString = (date) => {
    const parsedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return parsedDate;
  };

  let parseCheckInDateFormat = new Date(data.user.checkIn);
  let parseCheckOutDateFormat = new Date(data.user.checkOut);

  const checkInDate = parseDateToString(parseCheckInDateFormat);
  const checkOutDate = parseDateToString(parseCheckOutDateFormat);
  console.log("checkInDate:", checkInDate, "checkOutDate:", checkOutDate);

  return (
    <div>
      <Navbar />
      <Container>
        <Grid>
          <div className={classes.paper}>
            <Paper
              className={classes.paperContent}
              elevation={1}
              style={{ backgroundColor: "rgba(248,244,255,0.5)" }}
            >
              <Grid item>
                <Typography>
                  <img
                    src={process.env.PUBLIC_URL + "/Logo.png"}
                    style={{
                      width: "250px",
                      height: "100px",
                      marginTop: "-1.2rem",
                    }}
                    alt=""
                  />
                </Typography>
                <Typography
                  variant="h5"
                  className={`${classes.userText} ${classes.userTextStyle}`}
                >
                  User Details
                </Typography>
                <Typography
                  variant="h3"
                  className={`${classes.userText} ${classes.roomCategory}`}
                  style={{ fontSize: "30px" }}
                >
                  {data.roomDetails.roomCategory}
                </Typography>

                <Container>
                  <p className={classes.userDetails}>
                    {data.user.firstName} {data.user.lastName}
                  </p>
                  <p className={classes.roomDetails}>
                    <b>Room Size: </b>
                    {data.roomDetails.roomSize} SQFT
                  </p>
                  <p className={classes.roomDetails}>
                    <b>Price:</b> ${data.roomDetails.roomPrice}
                  </p>
                  <div>
                    <p
                      className={`${classes.checkInDetails} ${classes.userTextStyle}`}
                    >
                      Check In Details
                    </p>
                    <p className={classes.roomDetails}>
                      <b>Check In Date:</b> {checkInDate}
                    </p>
                    <p className={classes.roomDetails}>
                      <b>Check Out Date:</b> {checkOutDate}
                    </p>
                  </div>
                </Container>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default RoomReceipt;
