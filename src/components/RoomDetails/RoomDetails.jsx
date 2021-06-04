import axios from "axios";
import React, { useEffect, useState } from "react";

function RoomDetails(props) {
  const getRoomId = props.match.params.id;
  const [roomDetails, setRoomDetails] = useState("");

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
  }, []);

  return (
    <div>
      <h1>Room Details</h1>
    </div>
  );
}

export default RoomDetails;
