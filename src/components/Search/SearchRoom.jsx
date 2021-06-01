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

function SearchRoom() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [values, setValues] = useState(initialValues);

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
  let finalDate;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("In handle Submit");
    console.log("Dates:",values.checkIn);

    let getNewDate = new Date(values.checkIn);
    console.log("Getnedate:",getNewDate);
    finalDate = getNewDate.getFullYear() + '-' +  (getNewDate.getMonth() + 1)  + '-' +  getNewDate.getDate(); 
    console.log("finalDate:",typeof finalDate);
    console.log("finalDate:",finalDate);
    // let checkInData = JSON.stringify(values.checkIn);
    // console.log("CheckInDatq:", checkInData);
    // let newDate  = new Date(values.checkIn);
    // console.log("NEw Date:",newDate);
    // debugger;

    // user post
    // await axios.post("http://localhost:5000/user/registeruser", {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   email: values.email,
    // });

    // console.log("Vlaues checkin:", typeof(values.checkIn));
    // debugger;

    // get call for getAllRooms
    await axios.get(`http://localhost:5000/rooms/getAllRooms/${finalDate}`)
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  console.log("Vlaues:", values);
  return (
    <React.Fragment>
      <Navbar />
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
                  <Button type="submit" variant="contained" color="primary">
                    Search
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchRoom;
