import * as actionTypes from "./actionTypes"
import axios from "axios"
import { navigate } from "gatsby"

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

export const authFail = (errorMessage) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: errorMessage
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('localId');
    return {
        type: actionTypes.LOGOUT
    }
}

export const checkAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
        else {
            const expiresIn = new Date(localStorage.getItem('expiresIn'));
            const currentTime = new Date();
            console.log(currentTime)
            console.log(expiresIn)
            if (expiresIn <= currentTime) {
                dispatch(logout());
            }
            else {
                const localId = localStorage.getItem('localId');
                const authData = {
                    token: token,
                    userId: localId
                }
                dispatch(authSuccess(authData));
            }
        }
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
                userId: response.data.localId
            }
            const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('token', authData.token);
            localStorage.setItem('expiresIn', expiration);
            localStorage.setItem('localId', authData.userId);
            dispatch(authSuccess(authData))
            navigate('/');
        })
        .catch(error => {
            const errorMessage = error.response.data.error.message;
            console.log(error.response.data.error.message)
            dispatch(authFail(errorMessage))
        });
    }
}