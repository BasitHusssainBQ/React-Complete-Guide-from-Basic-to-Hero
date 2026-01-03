import React, { useContext, useState } from "react";
import Wrapper from "../wrapper";
import AuthContext from "../../context/Auth/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login </button>
      </form>
    </Wrapper>
  );
};

export default Login;
