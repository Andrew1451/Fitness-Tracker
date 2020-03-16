import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

const reducer = (state, action) => {
    if (action.type === 'AUTHENTICATE') {
        return {
            ...state,
            isAuthenticated: true
        }
    }
    return state;
}

const initialState = {
    isAuthenticated: false
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const createStore = () => reduxCreateStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));

// const createStore = () => reduxCreateStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore;