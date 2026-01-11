import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext/authContext";

const Signup = () => {
  const { handleLogout } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogout(data);
  };
  return (
    <form onClick={handleSubmit}>
      <input
        type="name"
        name="name"
        id=""
        placeholder="Jhon"
        value={data.name}
        onChange={handleChange}
      />
      <br />
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

export default Signup;
