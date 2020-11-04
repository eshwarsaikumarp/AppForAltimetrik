import Api from "../../Api"
import { actionTypes as types, endPoints} from "./constants";
import { makeDispatch } from "../../Helpers/Utils"

export const fetchUserList = () => (dispatch) => {
    // makeDispatch(dispatch, START_LOADING);
    Api.get(endPoints.USERS)
      .then((response) => {
        makeDispatch(dispatch, types.FETCH_USERS_SUCCESS, response.data);
        // makeDispatch(dispatch, STOP_LOADING);
      })
      .catch(function (error) {
        // makeDispatch(dispatch, STOP_LOADING);
      });
};