import React, { useReducer } from "react";
import authReducer from "./authReducer";
import axios from "axios";
import AuthContext from "./authContext";
import { handleSetAccessToken } from "../../utils/common";
import { LOGIN } from "../type";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
};

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        data
      );
      console.log(res.data);

      handleSetAccessToken(res.data.access_token);
      if (res.data.access_token) {
        dispatch({ type: LOGIN });
        navigate("/");
      }
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  const handleSignup = async (data) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`);
      console.log({ res });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
