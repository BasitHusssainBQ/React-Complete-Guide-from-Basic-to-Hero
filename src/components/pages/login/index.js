import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext/authContext";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id=""
        placeholder="jhon@email.com"
        value={data.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        id=""
        placeholder="******"
        value={data.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
