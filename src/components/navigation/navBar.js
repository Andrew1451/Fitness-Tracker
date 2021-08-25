import React from "react"
// import MenuButton from "./menuButton"
import Logo from "../ui/logo"
import * as classes from "./navBar.module.css"
import NavigationItems from "./navigationItems"

const NavBar = props => (
    <div className={classes.NavBar}>
        <Logo />
        {/* <MenuButton clicked={props.sideDrawerToggled} open={props.open} /> */}
        <NavigationItems />
    </div>
);

export default NavBar;