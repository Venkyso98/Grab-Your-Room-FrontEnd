import { Button, Container, Link, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./AllRooms.style";
import DisplayAllRooms from "./DisplayAllRooms";

function AllRooms(props) {
  const queryString = new URLSearchParams(useLocation().search);
  const queryStringValue = queryString.get("checkIn");
  console.log("queryStringValue:",typeof(queryStringValue));
  const [response, setResponse] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/getAllRooms/${queryStringValue}`)
      .then((response) => {
        console.log("Response Get in AllRooms:", response.data);
        setResponse(response.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const backToSearchForm = () => {
    props.history.push("/search-room");
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className={classes.bannerContainer}>
          <div className={classes.allRoomsbanner}></div>
          <div className={classes.textContent}>
            <Typography variant="h4" className={classes.roomTitle}>
              Luxuria Rooms
            </Typography>
            <Typography variant="h6" className={classes.tagline}>
              Stay that Suits You
            </Typography>
          </div>

          <div className={classes.backToSearchDiv}>
            <Button
              className={classes.backToSearch}
              variant="contained"
              color="primary"
              onClick={backToSearchForm}
            >
              Back To Search Form
            </Button>
          </div>
        </div>
        <div className={classes.roomTitleContent}>Our Rooms</div>
      </Container>

      {/* displays all the rooms here  */}
      <DisplayAllRooms displayFetchRooms={response} />
    </div>
  );
}

export default AllRooms;
