import React from 'react';
import { Link } from 'gatsby';
import classes from './navigationItem.module.css';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.link}>{props.children}</Link>
        </li>
    );
}

export default NavigationItem;