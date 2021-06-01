import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./Navbar.style";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

function Navbar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <Hidden mdUp>
              <MenuIcon />
            </Hidden>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GrabYourRoom
          </Typography>

          <Hidden mdDown>
            <div className={classes.appBarContent}>
              <Link to="/" className={classes.navHome}>Home</Link>
            </div>
            <div className={classes.appBarContent}>About Us</div>
            <div className={classes.appBarContent}>Contact Us</div>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={openDrawer}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          className={classes.closeMenuButton}
        >
          <CloseIcon />
        </IconButton>
        <Box className={classes.links}>
          <div className={classes.navbarDrawerLinks}>Home</div>
          <div className={classes.navbarDrawerLinks}>About Us</div>
          <div className={classes.navbarDrawerLinks}>Contact Us</div>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;
