import * as actionTypes from "./actionTypes"
import axios from "axios"

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signupSuccess = (signupData) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        signupData: signupData
    }
}

export const signupFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    }
}

export const authenticate = (email, password, isSignup) => {
    return dispatch => {
        dispatch(signupStart());
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.GATSBY_API_KEY}`;
        if (isSignup) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.GATSBY_API_KEY}`
        }
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post(url, data)
        .then(response => {
            console.log(response);
            // dispatch(authSuccess(response.data.))
        })
        .catch(error => console.log(`Error... : ${error.message}`));
    }
}

export const signin = () => {
    return {
        type: actionTypes.SIGNIN
    }
}