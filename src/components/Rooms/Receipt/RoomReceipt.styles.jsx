import { makeStyles } from "@material-ui/core";
const font = "Play, sans-serif";

export const useStyles = makeStyles((theme) => ({
  userText: {
    textAlign: "center",
    fontFamily: font,
  },
  userTextStyle: {
    textDecoration: "underLine",
    textDecorationStyle: "dotted",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  paperContent: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: "5%",
  },
  roomCategory: {
    fontFamily: font,
    marginBottom: "-1rem",
  },
  userDetails: {
    fontFamily: font,
    fontSize: "2rem",
    marginBottom: "-0.2rem",
  },
  roomDetails: {
    fontFamily: font,
    fontSize: "1rem",
  },
  checkInDetails: {
    fontFamily: font,
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "2rem",
  },
}));
