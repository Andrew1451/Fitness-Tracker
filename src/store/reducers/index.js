import { combineReducers } from "redux"
import auth from "./auth"
import workouts from "./workouts"

export default combineReducers ({
    auth,
    workouts
});