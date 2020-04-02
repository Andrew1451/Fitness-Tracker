import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import rootReducer from "./src/store/reducers/index"
import thunk from "redux-thunk"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStore = () => reduxCreateStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default ({ element }) => {
    const store = createStore();
    return <Provider store={store}>{element}</Provider>
}