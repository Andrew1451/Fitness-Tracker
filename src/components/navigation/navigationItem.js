import React from 'react';
import { Link } from 'gatsby';
import classes from './navigationItem.module.css';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <Link role='menuitem' onKeyDown={props.handleKeyPress} ref={props.setRef} to={props.link} className={props.class}>{props.children}</Link>
        </li>
    );
}

export default NavigationItem;