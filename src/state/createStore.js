import { createStore as reduxCreateStore } from "redux"

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
    isAuthenticated: true
}

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;