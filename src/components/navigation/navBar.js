import React from "react"
import MenuButton from "./menuButton"

const NavBar = props => (
    <div>
        <MenuButton clicked={props.sideDrawerClicked} open={props.open} />
    </div>
);

export default NavBar;