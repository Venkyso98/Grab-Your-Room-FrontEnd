import { Grid, GridList, GridListTile } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import DisplayAllRooms from "./DisplayAllRooms";

function AllRooms() {
  const queryString = new URLSearchParams(useLocation().search);
  const queryStringValue = queryString.get("checkIn");
  const [response, setResponse] = useState([]);

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

  return (
    <div>
      <Navbar />
      <DisplayAllRooms displayFetchRooms={response} />
    </div>
  );
}

export default AllRooms;
