import Api from "../../Api"
import Navigator from "../../Helpers/History"
import { actionTypes as types, endPoints} from "./constants";
import { makeDispatch } from "../../Helpers/Utils"
import { fetchUserList } from "../DashBoard/actions"

export const loginUser = (payload) => (dispatch) => {
    // makeDispatch(dispatch, START_LOADING);
    Api.post(endPoints.LOGIN, payload)
      .then((resp) => {
        localStorage.setItem("access_token", resp.data.token);
        localStorage.setItem("loggedIn", "loggedIn");
        localStorage.setItem("tokenExpiry", false);
        makeDispatch(dispatch, types.LOGIN_USER_SUCCESS, resp.data);
        Navigator.push('/dashboard')
        fetchUserList()(dispatch)
        // makeDispatch(dispatch, STOP_LOADING);
      })
      .catch(function (error) {
        // makeDispatch(dispatch, STOP_LOADING);
      });
};

export const logoutUser = () => (dispatch) => {
    makeDispatch(dispatch, types.LOGOUT_USER);
};

export const signUpUser = (payload, redirectToLogin) => (dispatch) => {
  // makeDispatch(dispatch, START_LOADING);
  Api.post(endPoints.SIGNUP, payload)
    .then((response) => {
      makeDispatch(dispatch, types.LOGIN_USER_SUCCESS, response.data);
      redirectToLogin(true)
      // makeDispatch(dispatch, STOP_LOADING);
    })
    .catch(function (error) {
      // makeDispatch(dispatch, STOP_LOADING);
    });
};
