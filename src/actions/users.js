import * as actionTypes from './actionTypes';

export const fetchUsers = () => {
    return {
        type: actionTypes.FETCH_USERS,
    }
}

export const startFetchUsers = () => {
    return {
        type: actionTypes.START_FETCH_USERS,
    }
}

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        payload: {
            users,
        }
    }
}

export const fetchUsersSuccess = () => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
})

export const fetchUsersFailed = (error) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: {
        error,
    }
})

export const addNewUserInit = (userData) => ({
    type: actionTypes.ADD_NEW_USER_INIT,
    userData,
})

export const addNewUser = (userData) => ({
    type: actionTypes.ADD_NEW_USER,
    userData,
})

export const clearUsersInit = () => ({
    type: actionTypes.CLEAR_USERS_INIT,
})

export const clearUsers = () => ({
    type: actionTypes.CLEAR_USERS,
})

export const deleteUserInit = (userId) => ({
    type: actionTypes.DELETE_USER_INIT,
    userId,
})

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const deleteUser = (userId) => ({
    type: actionTypes.DELETE_USER,
    userId,
})