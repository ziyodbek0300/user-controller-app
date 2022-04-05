import users from "./users";
import auth from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
       auth: auth,
       users: users,
});

export default rootReducer