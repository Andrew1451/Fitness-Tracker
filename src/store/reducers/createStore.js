import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import * as actionType from "../actions/actionTypes"
import thunk from "redux-thunk"

const initialState = {
    isAuthenticated: false,
    loading: false,
    userId: null,
    token: null,
    error: null
}

const authSuccess = (state, action) => {
    return {
        ...state,
        isAuthenticated: true,
        userId: action.authData.userId,
        token: action.authData.token,
        loading: false,
        error: null
    }
}

const authenticate = (state, action) => {
    return {
        ...state,
        isAuthenticated: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_SUCCESS: return authSuccess(state, action);
        case actionType.AUTHENTICATE: return authenticate(state, action);
        default: return state;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const createStore = () => reduxCreateStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));

// const createStore = () => reduxCreateStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore;