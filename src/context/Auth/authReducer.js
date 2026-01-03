import { LOG_IN, LOG_OUT, SIGN_UP } from "../type";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
    case SIGN_UP:
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      return { user: null, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
