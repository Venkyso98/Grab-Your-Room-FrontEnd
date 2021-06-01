import { Box, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Home.style";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

function Home() {
  const classes = useStyles();
  return (
    <nav className={classes.navBar}>
      <div className={classes.mainContent}>
        <div className={classes.leftPane}>
          <Link to="/">Home</Link>
          <Link to="/search">Rooms</Link>
          <a>Amenities</a>
        </div>
        <div className={classes.logoDiv}>
          <a href="">Grab Your Room</a>
        </div>
        <div className={classes.rightPane}>
          <a href="">Gallery</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
      </div>

      <Box className={classes.BoxContent}>
        <p>Luxury</p>
        <p>Hotels & Resort</p>
        {/* <div className={classes.bookNow}>Book Now</div> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.bookNow}
          endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
        >
          Book Now
        </Button>
      </Box>
    </nav>
  );
}

export default Home;
