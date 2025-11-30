import React from "react";
import style from "./index.module.css";

const Header = (props) => {
  return (
    <header className={`${style.header} center d-col`}>
      <h1>{props.title}</h1>
      <p>Create your expense list today...</p>
    </header>
  );
};

export default Header;
