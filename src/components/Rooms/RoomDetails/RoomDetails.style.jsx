import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  roomDetailsBannerContainer: {
    width: "100%",
    height: "30rem",
    marginTop: "1px",
  },
  roomDetailsBanner: {
    backgroundImage:
      "url('https://www.theramblehotel.com/wp-content/uploads/2017/12/Ramble-King-Room-banner-2.jpg')",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
  },
  backToRoomsDiv: {
    position: "absolute",
    textAlign: "center",
    width: "95% ",
    bottom: "20%",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      bottom: "20%",
      left:"1%"
    },
  },
  backToRooms: {
    boxShadow: "none",
    borderRadius: "2px",
    fontFamily: "Play, sans-serif",
    marginTop: "28%",
  },
  roomCategory: {
    textAlign: "left",
    marginTop: "2.3rem",
    fontSize: "2.2rem",
    // backgroundColor:"rgba(100, 149, 237,0.5)",
    fontFamily: "Play, sans-serif",
  },
  content: {
    marginTop: "0.8rem",
    fontFamily: "Play, sans-serif",
  },
  carousels: {
    margin: "3rem 0 2rem 0",
    borderRadius: "5px",
    width: "95%",
  },
  carouselsImage: {
    width: "100%",
    height: "52vh",
    borderRadius: "4px",
  },
  roomPrice: {
    marginTop: "3rem",
    fontFamily: "Play, sans-serif",
  },
  bookNow: {
    margin: "-2rem 0 2rem 0",
    float: "right",
    borderRadius: "2px",
    boxShadow: "none",
    fontFamily: "Play, sans-serif",
  },
  extra: {
    fontFamily: "Play, sans-serif",
    marginBottom: "1rem",
  },
  extraFacilities: {
    marginBottom: "2rem",
  },
  itemName: {
    // paddingLeft: "1rem",
    padding: "0.6rem",
    fontFamily: "Play, sans-serif",
    "&:hover": {
      borderRadius: "25px",
      color: "white",
      cursor: "pointer",
      backgroundColor: "rgb(63,81,181)",
    },
  },
}));
