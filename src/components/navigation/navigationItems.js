import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import NavigationItem from './navigationItem';
import classes from './navigationItems.module.css';

const NavigationItems = props => {
    let attachedClasses = [classes.NavigationItems]
    if (!props.open) {
        attachedClasses.push(classes.UnfocusNavItems)
    }
    return (
        //eslint-disable-next-line
        <ul className={attachedClasses.join(' ')} onClick={props.clicked} aria-labelledby='menu'>
            <NavigationItem link={'/'}>Home</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link={'/workouts'}>Previous Workouts</NavigationItem> 
                : <NavigationItem link={'/create-username'}>Create Username</NavigationItem>}
            {props.isAuthenticated ? <NavigationItem link={'/logout'} setRef={props.setLastNavRef} 
                    handleKeyPress={props.handleKeyPress} class='lastNavItem'>Logout</NavigationItem>
                : <NavigationItem link={'/sign-in'} setRef={props.setLastNavRef} 
                    handleKeyPress={props.handleKeyPress} class='lastNavItem'>Sign In</NavigationItem>}
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