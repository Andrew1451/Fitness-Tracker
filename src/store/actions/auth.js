import * as actionTypes from "./actionTypes"
import axios from "axios"

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authenticate = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
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
            const authData = {
                token: response.data.idToken,
                userId: response.data.idToken,
                expiresIn: response.data.expiresIn
            }
            const expiration = new Date(new Date().getTime() + authData.expiresIn * 1000)
            localStorage.setItem('token', authData.token);
            localStorage.setItem('expiresIn', expiration)
            dispatch(authSuccess(authData))
        })
        .catch(error => console.log(`Error... : ${error.message}`));
    }
}

export const signin = () => {
    return {
        type: actionTypes.SIGNIN
    }
}