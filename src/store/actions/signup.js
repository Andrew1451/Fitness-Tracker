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

export const signup = (email, password) => {
    return dispatch => {
        dispatch(signupStart());
        // axios.post({
        //     method: 'post',
        //     'Content-Type': 'application/json',
        //     url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.GATSBY_API_KEY}`,
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // })
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.GATSBY_API_KEY}`, 
        { email: email, password: password, returnSecureToken: true }, {'Content-Type': 'application/json'})
        .then(response => {
            // JSON.stringify(response);
            console.log(response);
        })
        .catch(error => console.log(`Error... : ${error}`));
    }
}

export const signin = () => {
    return {
        type: actionTypes.SIGNIN
    }
}