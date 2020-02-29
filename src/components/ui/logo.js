import React from "react"
import { Link } from "gatsby"
import classes from "./logo.module.css"

const Logo = props => (
    <div className={classes.Logo}>
        <Link to={'/'} >Fitness Tracker</Link>
    </div>
);

export default Logo;