import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SearchRoom.style";
import InputControl from "../Controls/InputControl";
import DatePickerControl from "../Controls/DatePickerControl";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function SearchRoom(props) {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  // let dummyArr = [];

  // opens when the component is rendered
  // useEffect(() => {
  //   axios.get("http://localhost:5000/user/registeruser")
  // }, []);

  // Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In handle Submit");

    let parseIntoDateFormat = new Date(values.checkIn);
    let finalCheckInDate =
      parseIntoDateFormat.getFullYear() +
      "-" +
      (parseIntoDateFormat.getMonth() + 1) +
      "-" +
      parseIntoDateFormat.getDate();

    // user post
    axios
      .post("http://localhost:5000/user/registeruser", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })
      .then((response) => {
        console.log("Response Post:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // dummyArr = [...dummyArr, values.firstName, values.lastName, values.email];
    // console.log("DummyArr:", dummyArr);
    // localStorage.setItem("");

    // send the checkIn date to other page as queryString
    props.history.push(`/allrooms?checkIn=${finalCheckInDate}`);
  };

  return (
    <React.Fragment>
      <Navbar /> {/* Centralised Navbar */}
      <div className={`${classes.searchBackground} ${classes.paper}`}>
        <Paper elevation={3}>
          <form onSubmit={handleSubmit}>
            <InputControl
              label="First Name"
              variant="outlined"
              id="outlined-basic"
              name="firstName"
              onChange={handleInputChange}
              value={values.firstName}
            />
            <InputControl
              label="Last Name"
              variant="outlined"
              id="outlined-basic"
              name="lastName"
              onChange={handleInputChange}
              value={values.lastName}
            />
            <InputControl
              label="Email"
              variant="outlined"
              id="outlined-basic"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            />
            <DatePickerControl
              name="checkIn"
              label="Check In"
              value={values.checkIn}
              onChange={handleInputChange}
            />
            <DatePickerControl
              name="checkOut"
              label="Check Out"
              value={values.checkOut}
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
    </React.Fragment>
  );
}

// withRouter as if we want to pass the data to another page after the completion of some specific function
export default withRouter(SearchRoom);
