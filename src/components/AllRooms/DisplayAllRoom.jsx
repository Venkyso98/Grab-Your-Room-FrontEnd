import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
  },
  card: {
    height: "17rem",
    maxWidth: 300,
    "& .hidden-button": {
      display: "none"
    },
    "&:hover .hidden-button": {
      display: "block",
      backgroundColor: "rgba(100,149,237,0.7)",
      color: "white",
	  fontWeight:"600"
      //   transform: scale(0.54)	
    },
  },
  roomPrice: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "1rem",
  },
  roomCategory: {
    textAlign: "center",
    fontSize: "18px",
  },
}));

function DisplayAllRoom({ displayFetchRooms }) {
  console.log("displayFetchRooms in display:", displayFetchRooms);
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item>
            <Grid container justify="center" spacing={2}>
              {displayFetchRooms.map((fetchRooms) => (
                <Grid item>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        // alt="Contemplative Reptile"
                        height="180"
                        // image="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                        image={fetchRooms.roomImages[0]}
                        title="Rooms"
                      ></CardMedia>
                      <div className={classes.roomPrice}>
                        <span className="hidden-button">
                          ${fetchRooms.roomPrice}
                        </span>
                      </div>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={classes.roomCategory}
                        >
                          {fetchRooms.roomCategory}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
              {/* <Grid container justify="center"> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DisplayAllRoom;
