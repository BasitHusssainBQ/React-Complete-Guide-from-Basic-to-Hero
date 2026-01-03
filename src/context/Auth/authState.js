import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../hook/useAuth";
import { LOG_IN, LOG_OUT, SIGN_UP } from "../type";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { handleUpdateAuth } = useAuth();

  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/users/`,
        { ...data, avatar: "https://api.lorem.space/image/face?w=640&h=480" }
      );
      navigate("/login");
      dispatch({ type: SIGN_UP, payload: {} });
    } catch (err) {
      console.log({ err });

      toast.error(
        typeof err.response.data?.message === "string"
          ? err.response.data?.message
          : err.response.data?.message[0],
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
  };

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,
        data
      );
      console.log({ res });

      dispatch({ type: LOG_IN });

      handleUpdateAuth(res.data);
      navigate("/");

      toast.success("Successfully Logged in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      console.log(err, "catch");
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: LOG_OUT });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        handleLogin,
        handleLogout,
        handleSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
