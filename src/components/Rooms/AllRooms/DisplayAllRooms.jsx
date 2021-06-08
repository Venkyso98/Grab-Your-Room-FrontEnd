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
import { useStyles } from "./DisplayAllRooms.style";

function DisplayAllRoom({ displayFetchRooms }) {
  const classes = useStyles();
  console.log("displayFetchRooms in display:", displayFetchRooms);

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
