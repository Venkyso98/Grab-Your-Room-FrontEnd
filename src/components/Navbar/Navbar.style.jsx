import { makeStyles } from "@material-ui/core/styles";

export const drawerWidth = 340;
export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#6495ed",
  },
  appBarContent: {
    marginRight: theme.spacing(1.5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  navHome: {
    textDecoration: "none",
    color:"white"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  links: {
    margin: `${theme.spacing(1.1)}px ${theme.spacing(0)}px ${theme.spacing(
      0
    )}px ${theme.spacing(6.2)}px`,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  navbarDrawerLinks: {
    fontSize: "16px",
    paddingTop: "10px",
    "&:hover": {
      color: "#446ccf",
      cursor: "pointer",
    },
  },
}));
