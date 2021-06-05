import { makeStyles } from "@material-ui/core";
import Image from "../../assets/images/bannerSearch.jpg";
const font = "Play, sans-serif";

export const useStyles = makeStyles((theme) => ({
  searchText: {
    textAlign: "center",
    fontFamily: font,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      padding: theme.spacing(5),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
    justifyContent: "center",
  },
  searchBackground: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    width: "100vw",
    height: "89.7vh",
  },
  searchButton: {
    marginTop: "1rem",
    float: "right",
    textTransform: "capitalize",
    fontFamily: font,
  }
}));
