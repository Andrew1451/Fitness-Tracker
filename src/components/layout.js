/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import * as actions from "../store/actions/index"
import NavBar from "../components/navigation/navBar"
import SideDrawer from "../components/navigation/sideDrawer"
import Header from "./header"
import "./layout.css"
import * as classes from "./layout.module.css"


const Layout = ({children, onCheckAuth}) => {
  const [sideDrawer, setSideDrawer] = useState(false);


  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer);
  }

  useEffect(() => {
    onCheckAuth();
  }, [onCheckAuth])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <>
      <NavBar open={sideDrawer} />
      <SideDrawer sideDrawerToggled={sideDrawerToggleHandler} open={sideDrawer} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.Main}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuth())
  }
}

export default connect(null, mapDispatchToProps) (Layout);
