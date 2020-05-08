import React from 'react'
import classes from "./sideDrawer.module.css"
import NavigationItems from "./navigationItems"
import MenuButton from "./menuButton"

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <MenuButton clicked={props.sideDrawerToggled} open={props.open} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems clicked={props.sideDrawerToggled}/>
                </nav>
            </div>
        </>
    );
}
    
export default SideDrawer;