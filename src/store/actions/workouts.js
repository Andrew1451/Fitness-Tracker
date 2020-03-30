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