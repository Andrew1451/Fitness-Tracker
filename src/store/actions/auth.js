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
    if (typeof window !== `undefined`) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('expiresIn');
        window.localStorage.removeItem('localId');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('exercises');
        return {
            type: actionTypes.LOGOUT
        }
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
            if (expiresIn <= currentTime) {
                dispatch(logout());
            }
            else {
                const refresh_token = localStorage.getItem('refreshToken');
                const payload = {
                    grant_type: 'refresh_token',
                    refresh_token: refresh_token
                }
                //send refresh token and update localStorage
                axios.post(`https://securetoken.googleapis.com/v1/token?key=${process.env.GATSBY_API_KEY}`, payload)
                .then(response => {
                    const expiresIn = new Date(new Date().getTime() + response.data.expires_in * 1000)
                    localStorage.setItem('expiresIn', expiresIn);
                    const authData = {
                        token: response.data.id_token,
                        userId: response.data.user_id
                    }
                    dispatch(authSuccess(authData))
                })
                .catch(error => console.log(error.response.data.error.message))
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
            const authData = {
                token: response.data.idToken,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken
            }
            const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', authData.token);
            localStorage.setItem('expiresIn', expiration);
            localStorage.setItem('localId', authData.userId);
            localStorage.setItem('refreshToken', authData.refreshToken);
            localStorage.setItem('exercises', '[]');
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