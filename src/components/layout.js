/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect }from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as actions from "../store/actions/index"
import NavBar from "../components/navigation/navBar"
import SideDrawer from "../components/navigation/sideDrawer"
import Header from "./header"
import "./layout.css"

const Layout = props => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer);
  }

  useEffect(() => {
    props.onCheckAuth()
  }, [])

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
      <div style={{margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem`}}>
        <main>{props.children}</main>
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
