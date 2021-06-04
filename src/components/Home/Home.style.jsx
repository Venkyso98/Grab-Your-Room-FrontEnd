import { makeStyles } from "@material-ui/core";
import Image from "../../assets/images/bannerImage.jpg";
// import Image from "../../assets/images/banneroom.jpg";
const font = "Play, sans-serif";

export const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    width: "100vw",
    height: "100vh",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  leftPane: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      marginLeft: theme.spacing(5),
      letterSpacing: theme.spacing(0.5),
      fontFamily: font,
    },
    "& a:hover": {
      color: "#89cff0",
      cursor: "pointer",
    },
  },
  logoDiv: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      textAlign: "center",
      fontSize: "1.5rem",
      fontFamily: font,
    },
  },
  rightPane: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      marginRight: theme.spacing(5),
      letterSpacing: theme.spacing(0.5),
      fontFamily: font,
    },
    "& a:hover": {
      color: "#89cff0",
      cursor: "pointer",
    },
  },
  BoxContent: {
    textAlign: "center",
    marginTop: "25%",
    color: "white",
    textTransform: "uppercase",
    "& p": {
      fontFamily: font,
      fontSize: "4rem",
      lineHeight: "20px",
    },
  },
  bookNow: {
    // marginLeft: "37rem",
    marginTop: "-2%",
    borderRadius: "3px",
    backgroundColor: "#4169e1",
    cursor: "pointer",
    fontFamily: font,
  },
  bookNowContent: {
    textDecoration: "none",
    color: "white",
  },
}));
