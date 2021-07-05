import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SearchRoom.style";
import InputControl from "../Controls/InputControl";
import DatePickerControl from "../Controls/DatePickerControl";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { getSingleUserData } from "../../Services/useAxios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function SearchRoom(props) {
  const classes = useStyles();
  const [response, setResponse] = useState(initialValues);
  const [email, setEmail] = useState("");
  const getDataofUser = JSON.parse(localStorage.getItem("userId"));

  // for fetching the user on every render i.e to persists the user data on form
  useEffect(() => {
    (async () => {
      try {
        const response = await getSingleUserData(getDataofUser);
        console.log("Response Get in Search ROmms:", response);
        setResponse(response.data);
        setEmail(response.data.email);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, []);

  // Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResponse((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  // Submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onClickData(response.checkIn, response.checkOut);
    let parseIntoDateFormat = new Date(response.checkIn);
    let finalCheckInDate =
      parseIntoDateFormat.getFullYear() +
      "-" +
      (parseIntoDateFormat.getMonth() + 1) +
      "-" +
      parseIntoDateFormat.getDate();

    let userDetails = {
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      checkIn: response.checkIn,
      checkOut: response.checkOut,
    };

    const pushCheckInData = () => {
      props.history.push(`/rooms-listing?checkIn=${finalCheckInDate}`);
    };

    // user put request i.e if user already exists
    if (response.email == email) {
      console.log("In put request");
      axios
        .put(
          `http://localhost:5000/user/updateUserDetails/${getDataofUser}`,
          userDetails
        )
        .then((response) => {
          console.log("User updated details", response.data);
          pushCheckInData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // user post
      axios
        .post("http://localhost:5000/user/registeruser", userDetails)
        .then((response) => {
          console.log("Response Post:", response);
          localStorage.setItem("userId", JSON.stringify(response.data._id));
        })
        .catch((error) => {
          console.log("Error:", error);
        });

      // send the checkIn date to other page as queryString
      pushCheckInData();
    }
  };

  console.log("Responses:", response);

  return (
    <React.Fragment>
      <Navbar />
      <Grid>
        <div className={classes.searchBackground}>
          <Paper elevation={3} className={classes.paperContent}>
            <Typography variant="h5" className={classes.searchText}>
              Search Room
            </Typography>
            <form onSubmit={handleSubmit}>
              <InputControl
                label="First Name"
                variant="outlined"
                id="outlined-basic"
                name="firstName"
                onChange={handleInputChange}
                value={response.firstName}
              />
              <InputControl
                label="Last Name"
                variant="outlined"
                id="outlined-basic"
                name="lastName"
                onChange={handleInputChange}
                value={response.lastName}
              />
              <InputControl
                label="Email"
                variant="outlined"
                id="outlined-basic"
                name="email"
                onChange={handleInputChange}
                value={response.email}
              />
              <DatePickerControl
                name="checkIn"
                label="Check In"
                value={response.checkIn}
                onChange={handleInputChange}
              />
              <DatePickerControl
                name="checkOut"
                label="Check Out"
                value={response.checkOut}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.searchButton}
              >
                Search
              </Button>
            </form>
          </Paper>
        </div>
      </Grid>
    </React.Fragment>
  );
}

// withRouter as if we want to pass the data to another page after the completion of some specific function
export default withRouter(SearchRoom);
