import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleUserData } from "../../../Services/useAxios";
import Navbar from "../../Navbar/Navbar";

function RoomDetails(props) {
  const getRoomId = props.match.params.id;
  const [roomDetails, setRoomDetails] = useState("");
  const [user, setUser] = useState("");
  const getUserId = JSON.parse(localStorage.getItem("userId"));
  console.log("getUserId:", getUserId);

  const userCheckInCheckOut = {
    checkIn: user.checkIn,
    checkOut: user.checkOut,
  };

  const handleBookNow = () => {
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

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/getSingleRoom/${getRoomId}`)
      .then((response) => {
        console.log("Response:", response);
        setRoomDetails(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // fetching the single user data
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

  return (
    <div>
      <Navbar />
      <h1>Room Details</h1>
      <Link
        to={{
          pathname: "/room-receipt",
          state: { roomDetails, user },
        }}
      >
        <Button variant="contained" onClick={handleBookNow}>
          Book Now
        </Button>
      </Link>
    </div>
  );
}

export default RoomDetails;
