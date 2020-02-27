import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header style={{ background: `black`, marginBottom: `1.45rem`}}>
    <h1 className={classes.Logo}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
