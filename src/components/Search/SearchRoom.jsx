import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useStyles } from "./SearchRoom.style";
import InputControl from "../Controls/InputControl";
import DatePickerControl from "../Controls/DatePickerControl";
import axios from "axios";
import { Link, Route, withRouter } from "react-router-dom";
import About from "../About";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function SearchRoom(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [values, setValues] = useState(initialValues);
  // const [formResponse, setFormResponse] = useState("");

  // opens when the component is rendered
  useEffect(() => {
    setOpen(open);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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

    let manipulateCheckInDate = new Date(values.checkIn);
    let finalCheckInDate =
      manipulateCheckInDate.getFullYear() +
      "-" +
      (manipulateCheckInDate.getMonth() + 1) +
      "-" +
      manipulateCheckInDate.getDate();

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

    // get call for getAllRooms
    // axios
    //   .get(`http://localhost:5000/rooms/getAllRooms/${finalCheckInDate}`)
    //   .then((response) => {
    //     console.log("Response Get:", response);
    //     // setFormResponse([...response.data]);
    //     props.onClickData(response.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error:", err);
    //   });

    props.history.push(`/about/${finalCheckInDate}`);
    // onClickData(formResponse);
    // // Route
    // <Route path="/about" component={About} />;
  };

  // console.log("Form Resposne:", formResponse);
  // debugger

  return (
    <React.Fragment>
      <Navbar /> {/* Centralised Navbar */}
      <div className={classes.searchBackground}>
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            // onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle
              id="alert-dialog-slide-title"
              className={classes.dialogTitle}
            >
              Search Room
            </DialogTitle>
            <DialogContent>
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
                <DialogActions>
                  {/* <Link to="/about"> */}
                  <Button type="submit" variant="contained" color="primary">
                    Search
                  </Button>
                  {/* </Link> */}
                </DialogActions>
              </form>
              {/* <button onClick={onClickData}>Demo</button> */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </React.Fragment>
  );
}

// withRouter as if we want to pass the data to another page after the completion of some specific function
export default withRouter(SearchRoom);
