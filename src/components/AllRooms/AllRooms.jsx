import { Grid, GridList, GridListTile } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import DisplayAllRoom from "./DisplayAllRoom";

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
      {/* <GridList cols={3} spacing={24}> */}
      {/* {response.map((fetchRooms) => (
        // console.log("fetchRooms:", fetchRooms),
        // <Grid container spacing={2}>
        //   <Grid item lg={3}>
        // <GridListTile style={{height:"380px"}}>
        <DisplayAllRoom key={fetchRooms._id} displayFetchRooms={fetchRooms} />
        // </GridListTile>
        //   </Grid>
        // </Grid>
      ))} */}
      {/* </GridList> */}
      <DisplayAllRoom displayFetchRooms={response} />
    </div>
  );
}

export default AllRooms;
