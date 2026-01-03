import React, { useContext } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import useAuth from "./hook/useAuth";
import NotFound from "./components/notFound";
import AuthContext from "./context/Auth/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log({ isLoggedIn });

  return (
    <>
      <ToastContainer />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
