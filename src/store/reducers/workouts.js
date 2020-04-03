import * as actionTypes from "../actions/actionTypes"

const initialState = {
    workouts: [],
    exercises: [],
    loading: false,
    error: null,
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WORKOUTS_START: return fetchWorkoutsStart(state, action);
        case actionTypes.SAVE_EXERCISE: return saveExercise(state, action);
        default: return state;
    }
}

export default reducer;