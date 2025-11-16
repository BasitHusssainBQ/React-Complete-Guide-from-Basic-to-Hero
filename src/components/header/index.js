import React from "react";
import style from "./index.module.css";

const Header = () => {
  return (
    <header className={`${style.header} center d-col`}>
      <h1>Project 01 - Expense Tracker</h1>
      <p>Create your expense list today...</p>
    </header>
  );
};

export default Header;
