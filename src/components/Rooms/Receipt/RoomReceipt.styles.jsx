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
    "& > *": {
      margin: theme.spacing(3),
      padding: theme.spacing(5),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
  roomCategory: {
    fontFamily: font,
    marginBottom: "-1rem",
  },
  userDetails: {
    fontFamily: font,
    fontSize: "2rem",
	marginBottom:"-0.2rem"
  },
  roomDetails: {
    fontFamily: font,
    fontSize: "1rem",
  },
  checkInDetails: {
    fontFamily: font,
	textAlign:"center",
	marginTop:"2rem",
	fontSize:"2rem"
  },
}));
