import React, { useEffect } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import Workout from "../components/workout"
import SEO from "../components/seo"
import * as actions from "../store/actions/index"

const Workouts = ({isAuthenticated, onFetchWorkouts, workouts, userId}) => {
  useEffect(() => {
    onFetchWorkouts(userId);
  }, [onFetchWorkouts, userId]);
  let exercises = [...workouts].reverse().map((workout, i) => {
        const date = Object.values(workout[0])
        return <Workout key={i} workout={workout} date={date}/>
    });
  if (!isAuthenticated) {
    exercises = null;
  }
  return (
    <Layout>
      <SEO title="Workouts" />
      {exercises}
      {isAuthenticated ? null : <p style={{color: 'lime', textAlign: 'center'}}>You need to sign in!</p>}
    </Layout>
  );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        workouts: state.workouts.workouts,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWorkouts: (userId) => dispatch(actions.fetchWorkouts(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Workouts);