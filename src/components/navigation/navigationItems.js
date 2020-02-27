import React from 'react';
import NavigationItem from './navigationItem';
import classes from './navigationItems.module.css';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            {props.isAuthenticated ? <NavigationItem link={'/'}>Home</NavigationItem> 
                : <NavigationItem link={'/username'}>Create Username</NavigationItem>}
            {props.isAuthenticated ? <NavigationItem link={'/workouts'}>Previous Workouts</NavigationItem>
                : <NavigationItem link={'/sign-in'}>Sign In</NavigationItem>}
        </ul>
    );
};

export default NavigationItems;