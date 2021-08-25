import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { SidebarContext } from '../../utilities/context';
import * as classes from './navigationItem.module.css';

const NavigationItem = props => {
    const sideDrawerToggled = useContext(SidebarContext)
    return (
        <li className={classes.NavigationItem}>
            <Link role='menuitem' onClick={sideDrawerToggled} onKeyDown={props.handleKeyPress} ref={props.setRef} to={props.link} className={props.class}>{props.children}</Link>
        </li>
    );
}

export default NavigationItem;