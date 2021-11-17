import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { postReducer } from './posts'

const reducers = combineReducers({
    posts: postReducer,
    auth: authReducer,
})

export default reducers;