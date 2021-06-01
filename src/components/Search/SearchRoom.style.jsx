import { makeStyles } from "@material-ui/core";
import Image from "../../assets/images/bannerSearch.jpg";

export const useStyles = makeStyles((theme) => ({
  searchBackground: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    width: "100vw",
    height: "90vh",
  },
  dialogTitle: {
    textAlign: "center",
  },
}));
