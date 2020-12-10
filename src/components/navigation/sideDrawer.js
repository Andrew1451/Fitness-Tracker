import React, { useState } from 'react'
import classes from "./sideDrawer.module.css"
import NavigationItems from "./navigationItems"
import MenuButton from "./menuButton"

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
    //todo: create hook for this
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            e.target.click();
        }
        if (props.open && e.key === 'Escape') {
            firstNavItem.focus();
            firstNavItem.click();
        }
        if (e.key === 'Tab' || e.shiftKey) {
            if (e.shiftKey && e.key === 'Tab' && props.open) {  //shift and tab
                if (firstNavItem === document.activeElement) {
                    lastNavItem.focus();
                    e.preventDefault();
                }
            } else {  //tab
                if (lastNavItem === document.activeElement) {
                    firstNavItem.focus();
                    e.preventDefault();
                }
            }
        }
    }
    return (
        <>
            <MenuButton clicked={props.sideDrawerToggled} open={props.open} handleKeyPress={handleKeyPress} 
                setRef={setChildRef} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems clicked={props.sideDrawerToggled} handleKeyPress={handleKeyPress} 
                    setLastNavRef={setLastNavRef} open={props.open} />
                </nav>
            </div>
        </>
    );
}
    
export default SideDrawer;