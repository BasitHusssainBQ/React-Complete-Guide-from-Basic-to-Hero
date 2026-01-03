import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#eee",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "1px 4px 6px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
