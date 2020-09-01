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

  let workout = workouts.map(([workoutId, exercises]) => {
        
    const date = Object.values(exercises[0])
    return <Workout key={workoutId} userId={userId} workoutId={workoutId} workout={exercises} date={date}/>
  });
  
  if (!isAuthenticated) {
    workout = null;
  }
  return (
    <Layout>
      <SEO title="Workouts" />
      {workout}
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