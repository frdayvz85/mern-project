import { AUTH, LOGOUT } from '../constants/actionTypes';

const initialState = {
    authData: null
}
export const authReducer = (state = initialState, action) => {   //state = user
    switch (action.type) {
        case AUTH:
            // console.log(action?.data)
            localStorage.setItem('user', JSON.stringify({ ...action.data }))
            return { ...state, authData: action?.data }
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null }
        default:
            return state;
    }
}
