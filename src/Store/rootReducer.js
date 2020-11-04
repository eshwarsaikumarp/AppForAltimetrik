/**
 * App Reducers
 */
import { combineReducers } from "redux";
import { glbActTypes } from "../Store/actionTypes";
import settings from "./GlobalReducers/settings"
import login from "../Views/LoginAndSignUp/reducer";

const reducers = combineReducers({
    settings,
    login
});

const rootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    if (action.type === glbActTypes.DESTROY_SESSION) {
        state = undefined;
    }
    return reducers(state, action);
};

export default rootReducer;