import * as actionTypes from "../actions/actionTypes"

const initialState = {
    workouts: [],
    exercises: [],
    loading: false,
    error: null
}

const fetchWorkoutsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const saveExercise = (state, action) => {
    return {
        ...state,
        exercises: state.exercises.concat(action.newExercise)
    }
}

const saveWorkoutStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const saveWorkoutSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null
    }
}

const saveWorkoutFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.errorMessage
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WORKOUTS_START: return fetchWorkoutsStart(state, action);
        case actionTypes.SAVE_EXERCISE: return saveExercise(state, action);
        case actionTypes.SAVE_WORKOUT_START: return saveWorkoutStart(state, action);
        case actionTypes.SAVE_WORKOUT_SUCCESS: return saveWorkoutSuccess(state, action);
        case actionTypes.SAVE_WORKOUT_FAIL: return saveWorkoutFail(state, action);
        default: return state;
    }
}

export default reducer;