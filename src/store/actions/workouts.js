import * as actionTypes from "./actionTypes"
import axios from "axios"
import { navigate } from "gatsby"

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

export const fetchWorkoutsFail = () => {
    return {
        type: actionTypes.FETCH_WORKOUTS_FAIL
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

export const deleteWorkoutSuccess = () => {
    return {
        type: actionTypes.DELETE_WORKOUT_SUCCESS
    }
}

export const deleteWorkoutStart = () => {
    return {
        type: actionTypes.DELETE_WORKOUT_START
    }
}

export const deleteWorkoutFail = (errorMessage) => {
    return {
        type: actionTypes.DELETE_WORKOUT_FAIL,
        errorMessage: errorMessage
    }
}

export const deleteWorkout = (id, workoutId) => {
    return dispatch => {
        dispatch(deleteWorkoutStart());
        axios.delete(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/${id}/workouts/${workoutId}.json`,)
            .then(response => {
                dispatch(deleteWorkoutSuccess());
                dispatch(fetchWorkouts(id));
                navigate('/workouts');
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(deleteWorkoutFail(errorMessage));
            })
    }
}

export const saveWorkout = (workout, id) => {
    return dispatch => {
        dispatch(saveWorkoutStart());
        axios.post(`https://${process.env.GATSBY_PROJECT_ID}.firebaseio.com/${id}/workouts.json`, workout)
        .then(response => {
            dispatch(saveWorkoutSuccess());
            localStorage.setItem('exercises', '[]');
            navigate('/workouts');
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
        .then(async response => {
            try {
                const data = await response.data;
                const workouts = Object.entries(data);
                workouts.reverse();
                dispatch(fetchWorkoutsSuccess(workouts));
            }
            catch {
                dispatch(fetchWorkoutsFail());
                navigate('/workouts')
            }
        })
        .catch(() => {
            const errorMessage = 'No workouts to grab :(';
            fetchWorkoutsFail(errorMessage);
            navigate('/');
        })
    }
}

export const saveExercise = (newExercise) => {
    return {
        type: actionTypes.SAVE_EXERCISE,
        newExercise: newExercise
    }
}