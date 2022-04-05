import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            userId,
        }
    }
}

export const authFailed = (error) => ({
    type: actionTypes.AUTH_FAILED,
    error,
})

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_INIT_LOGOUT,
    }
}

export const authLogoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationMins) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationMins,
    }
}

export const authUser = (authData) => {
    return {
        type: actionTypes.AUTH_USER,
        authData,
    }
}

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE,
    }
}