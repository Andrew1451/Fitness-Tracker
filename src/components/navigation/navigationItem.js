import React from 'react';
import { Link } from 'gatsby';
import classes from './navigationItem.module.css';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <Link to={props.link} activeClassName={classes.active}>{props.children}</Link>
    </li>
);

export default NavigationItem;