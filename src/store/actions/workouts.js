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

export const fetchWorkoutsSuccess = ( workouts ) => {
    return {
        type: actionTypes.FETCH_WORKOUTS_SUCCESS,
        workouts: workouts
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

export const saveWorkout = (workout, id) => {
    return dispatch => {
        dispatch(saveWorkoutStart());
        axios.post(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/${id}/workouts.json`, workout)
        .then(response => {
            dispatch(saveWorkoutSuccess());
            localStorage.setItem('exercises', '[]')
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(saveWorkoutFail(errorMessage));
        })
    }
}

export const fetchWorkouts = ( userId ) => {
    return dispatch => {
        dispatch(fetchWorkoutsStart());
        axios.get(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/${userId}/workouts.json`)
        .then(response => {
            const data = response.data;
            const workouts = Object.values(data);
            dispatch(fetchWorkoutsSuccess(workouts));
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const saveExercise = (newExercise) => {
    return {
        type: actionTypes.SAVE_EXERCISE,
        newExercise: newExercise
    }
}