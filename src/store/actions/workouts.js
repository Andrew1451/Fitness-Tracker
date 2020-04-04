import * as actionTypes from "./actionTypes"
import axios from "axios"

// export const fetchWorkouts = (workout, reps) => {
//     dispatch => {
//         axios.post()
//     }
// }

export const fetchWorkoutsStart = () => {
    return {
        type: actionTypes.FETCH_WORKOUTS_START
    }
}

export const fetchWorkoutsSuccess = (workout, reps) => {
    return {
        type: actionTypes.FETCH_WORKOUTS_SUCCESS,
        workout: workout,
        reps: reps
    }
}

export const fetchWorkoutsFail = (error) => {
    return {
        type: actionTypes.FETCH_WORKOUTS_FAIL,
        error: error
    }
}

export const saveWorkoutStart = () => {
    return {
        type: actionTypes.SAVE_WORKOUT_START
    }
}

export const saveWorkoutSuccess = () => {
    return {
        type: actionTypes.SAVE_WORKOUT_SUCCESS
    }
}

export const saveWorkoutFail = (errorMessage) => {
    return {
        type: actionTypes.SAVE_WORKOUT_FAIL,
        errorMessage: errorMessage
    }
}

export const saveWorkout = (workout) => {
    return dispatch => {
        dispatch(saveWorkoutStart());
        axios.post(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/workouts.json`, workout)
        .then(response => {
            console.log(response);
            dispatch(saveWorkoutSuccess());
            localStorage.setItem('exercises', '[]')
        })
        .catch(error => {
            console.log(error.message)
            const errorMessage = error.message;
            dispatch(saveWorkoutFail(errorMessage));
        })
    }
}

export const saveExercise = (newExercise) => {
    return {
        type: actionTypes.SAVE_EXERCISE,
        newExercise: newExercise
    }
}