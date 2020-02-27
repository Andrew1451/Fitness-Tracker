import React from 'react'
import classes from "./sideDrawer.module.css"
import NavigationItems from "./navigationItems"

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}
    
export default SideDrawer;