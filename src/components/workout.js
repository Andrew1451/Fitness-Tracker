import React from "react"
import { connect } from "react-redux"
import classes from "./workout.module.css"
import Button from "./ui/button"
import * as actions from "../store/actions/index"

const Workout = ({ workout, date, workoutId, userId, onDeleteWorkout }) => {

    const deleteWorkoutHandler = (userId, workoutId) => {
        onDeleteWorkout(userId, workoutId);
    }

    const exercise = workout.slice(1).map((w, i) => {
        return (
            <div className={classes.Exercise} key={i}>
                <p>Exercise: <span>{w.exercise}</span></p>
                <p>Reps: <span>{w.reps}</span></p>
            </div>
        )
    });
    return (
        <div className={classes.Workout}>
            <h3>{date}</h3>
            {exercise}
            <Button clicked={() => deleteWorkoutHandler(userId, workoutId)} btnType={'deleteButton'}>Delete Workout</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        workouts: state.workouts.workouts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteWorkout: (userId, workoutId) => dispatch(actions.deleteWorkout(userId, workoutId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Workout);