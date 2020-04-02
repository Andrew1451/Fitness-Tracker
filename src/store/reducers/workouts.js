import * as actionTypes from "../actions/actionTypes"

const initialState = {
    workouts: [],
    loading: false,
    error: null,
}

const fetchWorkoutsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WORKOUTS_START: return fetchWorkoutsStart(state, action);
        default: return state;
    }
}

export default reducer;