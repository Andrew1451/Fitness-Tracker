import React, { useEffect } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as actions from "../store/actions/index"

const Workouts = ({isAuthenticated, onFetchWorkouts}) => {
  useEffect(() => {
    onFetchWorkouts();
  }, [onFetchWorkouts])
  return (
    <Layout>
      <SEO title="Home" />
      {isAuthenticated ? <p style={{color: 'red'}}>forbidden workouts page</p> : <p style={{color: 'lime'}}>you need to sign in!</p>}
    </Layout>
  );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWorkouts: () => dispatch(actions.fetchWorkouts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Workouts);