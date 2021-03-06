import * as actionType from "../actions/actionTypes"

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

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

const logout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_SUCCESS: return authSuccess(state, action);
        case actionType.AUTH_FAIL: return authFail(state, action);
        case actionType.LOGOUT: return logout(state, action);
        default: return state;
    }
}

export default reducer;