import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavigationItem from './navigationItem';
import classes from './navigationItems.module.css';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link={'/'}>Home</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link={'/workouts'}>Previous Workouts</NavigationItem> 
                : <NavigationItem link={'/create-username'}>Create Username</NavigationItem>}
            {props.isAuthenticated ? <NavigationItem link={'/logout'}>Logout</NavigationItem>
                : <NavigationItem link={'/sign-in'}>Sign In</NavigationItem>}
        </ul>
    );
};

NavigationItems.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = ( state ) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(NavigationItems);