import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleUserData } from "../../../Services/useAxios";
import Navbar from "../../Navbar/Navbar";
import Carousel from "react-material-ui-carousel";
import { useStyles } from "./RoomDetails.style";

function RoomDetails(props) {
  const getRoomId = props.match.params.id;
  const [roomDetails, setRoomDetails] = useState("");
  const [user, setUser] = useState("");
  const classes = useStyles();
  const getUserId = JSON.parse(localStorage.getItem("userId"));

  const userCheckInCheckOut = {
    checkIn: user.checkIn,
    checkOut: user.checkOut,
  };

  // Book now i.e put request
  const handleBookNow = () => {
    // Room update request
    axios
      .put(
        `http://localhost:5000/rooms/updateRoom/${getRoomId}`,
        userCheckInCheckOut
      )
      .then((response) => {
        console.log("Put Response:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // fetching Room Details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/getSingleRoom/${getRoomId}`)
      .then((response) => {
        console.log("Room Response:", response);
        setRoomDetails(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // fetching the single user data from custom axios file
    (async () => {
      try {
        const response = await getSingleUserData(getUserId);
        console.log("User Response:", response);
        setUser(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, []);

  // Date Parsing
  let parseIntoDateFormat = new Date(user?.checkIn);
  console.log("parseIntoDateFormat:", parseIntoDateFormat);
  let finalCheckInDate =
    parseIntoDateFormat.getFullYear() +
    "-" +
    (parseIntoDateFormat.getMonth() + 1) +
    "-" +
    parseIntoDateFormat.getDate();

  const handleBackToRooms = () => {
    props.history.push(`/rooms-listing?checkIn=${finalCheckInDate}`);
  };

  console.log("RoomDetaisl:",roomDetails.length);

  return (
    <div>
      <Navbar />
      <Container>
        <div className={classes.roomDetailsBannerContainer}>
          <div className={classes.roomDetailsBannerImage}>
            {roomDetails.roomImages &&  <img className={classes.roomDetailsBannerImage} src={roomDetails?.roomImages[0]} /> }           
          </div>
            <div className={classes.backToRoomsDiv}>
              <Button
                className={classes.backToRooms}
                variant="contained"
                color="primary"
                onClick={handleBackToRooms}
              >
                Back To Rooms
              </Button>
            </div>
          {/* </div> */}
        </div>

        <Grid container>
          <Grid item sm={6} md={6} lg={6}>
            <div className={classes.carousels}>
              <Carousel
                animation="slide"
                navButtonsProps={{
                  // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                  style: {
                    backgroundColor: "rgba(100, 149, 237,1)",
                    borderRadius: 50,
                  },
                }}
              >
                {roomDetails.roomImages?.map((item) => (
                  <img src={item} className={classes.carouselsImage} />
                ))}
              </Carousel>
            </div>
          </Grid>

          <Grid item sm={6} md={6} lg={6}>
            <Typography className={classes.roomCategory}>
              {roomDetails.roomCategory}
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Size: {roomDetails.roomSize} SQFT
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Max-Capacity: {roomDetails.maxpersons} Persons
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              {roomDetails.roomDescription}{" "}
            </Typography>
            <Typography variant="h6" className={classes.roomPrice}>
              ${roomDetails.roomPrice}
            </Typography>
            <Link
              to={{
                pathname: "/room-receipt",
                state: { roomDetails, user },
              }}
            >
              <Button
                className={classes.bookNow}
                variant="contained"
                onClick={handleBookNow}
                color="primary"
              >
                Book Now
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Container>
          <Grid container>
            <Grid item>
              <Paper elevation={0}>
                <Typography variant="h5" className={classes.extra}>
                  Extras
                </Typography>
                <div className={classes.extraFacilities}>
                  {roomDetails.extraFacilities?.map((item) => (
                    <span className={classes.itemName}>{item}</span>
                  ))}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default RoomDetails;
