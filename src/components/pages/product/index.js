import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product</h1>
      <button onClick={() => navigate("/product/123")}>View Details</button>
    </div>
  );
};

export default Product;
