import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Workouts = (props) => (
  <Layout>
    <SEO title="Home" />
    {props.isAuthenticated ? <p style={{color: 'red'}}>forbidden workouts page</p> : <p style={{color: 'lime'}}>you need to sign in!</p>}
  </Layout>
)

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null) (Workouts);