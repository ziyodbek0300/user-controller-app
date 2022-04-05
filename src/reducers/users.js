import * as actionTypes from '../actions/actionTypes';


const initialState = {
    users: [],
    loading: false,
    loaded: false,
    error: false,
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCH_USERS:
            return {
                ...state,
                loading: true,
                loaded: false,
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            }
        case actionTypes.FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload.users.data,
            }
        case actionTypes.ADD_NEW_USER:
            return {
                ...state,
                users: state.users.concat(action.userData)
            }
        case actionTypes.CLEAR_USERS:
            return {
                ...state,
                users: [],
                loaded: false,
            }
        case actionTypes.DELETE_USER_INIT:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.DELETE_USER_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id.toString() !== action.userId.toString()),
            }
        default:
            return state;
    }
}

export default users;