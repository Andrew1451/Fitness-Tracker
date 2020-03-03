import React from 'react';
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

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

// NavigationItems.PropTypes = {
//     isAuthenticated: PropTypes.bool
// }

const mapStateToProps = ({ isAuthenticated }) => {
    return { isAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch({ type: 'AUTHENTICATE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);