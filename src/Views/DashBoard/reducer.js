import { actionTypes } from "./constants"

/**
 * initial auth user
 */
const INIT_STATE = {
    loading: false,
    userList: {}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_SUCCESS:
            return { ...state, userList: action.payload };
        default:
            return { ...state };
    }
};