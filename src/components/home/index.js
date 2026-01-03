import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Auth/authContext";

const Home = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
