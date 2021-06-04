import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
  },
  card: {
    height: "16.5rem",
    maxWidth: 300,

    "& .hidden-button": {
      display: "none",
    },
    "&:hover .hidden-button": {
      position: "absolute",
      display: "block",
      // backgroundColor: "rgba(100,149,237,0.5)",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "white",
      fontWeight: "600",
      padding: "10px",
      borderRadius: "5px",
      margin: "-7rem 0 0 7rem",
      fontFamily: "Play, sans-serif",
    },
    "&:hover .roomName": {
      backgroundColor: "rgba(0,0,0,0.5)",
      height:"100px",
      color:"white"
    },
  },
  roomPrice: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "1rem",
  },
  roomCategory: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Play, sans-serif",
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
                <Grid item key={fetchRooms._id}>
                  <Link
                    to={`/room-details/${fetchRooms._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className={classes.card}>
                      <CardActionArea className={classes.cardColor}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={fetchRooms.roomImages[2]}
                          title="Rooms"
                        ></CardMedia>
                        <div className={classes.roomPrice}>
                          <div className="hidden-button">
                            ${fetchRooms.roomPrice}
                          </div>
                        </div>
                        <CardContent className="roomName">
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
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DisplayAllRoom;
