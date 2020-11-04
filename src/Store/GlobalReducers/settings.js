/**
 * App Settings Reducers
 */
import { glbActTypes } from "../actionTypes";

/**
 * initial app settings
 */
const INIT_STATE = {
  darkMode: null,
  startUserTour: false,
  colorTheme: "",
  languages: 'En',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case glbActTypes.DARK_MODE:
      return { ...state, darkMode: action.payload };

    default:
      return { ...state };
  }
};
