import React, { useContext, useState } from "react";
import Wrapper from "../wrapper";
import AuthContext from "../../context/Auth/authContext";
import { Bounce, toast } from "react-toastify";

const Signup = () => {
  const { handleSignup } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      handleSignup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    } else if (data.password !== data.confirmPassword) {
      toast.error("Incorrect password", {
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
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label> <br />
          <input
            type="text"
            name="name"
            id="username"
            value={data.name}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label> <br />
          <input
            type="Password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

export default Signup;
