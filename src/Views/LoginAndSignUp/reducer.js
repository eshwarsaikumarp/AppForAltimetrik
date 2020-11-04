import { actionTypes } from "./constants"

/**
 * initial auth user
 */
const INIT_STATE = {
    user: {},
    loading: false,
    errorMessage: "",
    userData: {},
    formFields: [],
    alertMessage: {},
    logOutMessage: {},
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return { ...state, loading: true };

        case actionTypes.LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };

        case actionTypes.LOGIN_USER_FAILURE:
            return { ...state, loading: false, errorMessage: action.payload };

        case actionTypes.LOGOUT_USER:
            return { ...state, user: null, userData: {} };

        case actionTypes.SIGNUP_USER:
            return { ...state, loading: true };

        case actionTypes.SIGNUP_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };

        case actionTypes.SIGNUP_USER_FAILURE:
            return { ...state, loading: false };

        default:
            return { ...state };
    }
};