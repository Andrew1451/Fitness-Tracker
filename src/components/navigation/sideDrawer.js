import React, { useState } from 'react'
import { SidebarContext } from '../../utilities/context';
import classes from "./sideDrawer.module.css"
import NavigationItems from "./navigationItems"
import MenuButton from "./menuButton"
import { handleKeyPress } from "../../utilities/utilities"

const SideDrawer = props => {
    const [firstNavItem, setFirstNavItem] = useState();
    const [lastNavItem, setLastNavItem] = useState();

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    const setChildRef = ref => {
        setFirstNavItem(ref);
    }
    const setLastNavRef = ref => {
        setLastNavItem(ref);
    }

    //accessibility - trap focus for mobile menu
    handleKeyPress(props, firstNavItem, lastNavItem)
    
    return (
        <>
            <SidebarContext.Provider value={props.sideDrawerToggled}>
                <MenuButton clicked={props.sideDrawerToggled} open={props.open} handleKeyPress={handleKeyPress} 
                    setRef={setChildRef} />
                <div className={attachedClasses.join(' ')}>
                    <nav>
                        <NavigationItems handleKeyPress={handleKeyPress} 
                        setLastNavRef={setLastNavRef} open={props.open} />
                    </nav>
                </div>
            </SidebarContext.Provider>
        </>
    );
}
    
export default SideDrawer;