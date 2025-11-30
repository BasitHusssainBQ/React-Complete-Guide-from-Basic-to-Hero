import React from "react";
import style from "./index.module.css";

const ListCard = ({ data, expensesLength, idx }) => {
  return (
    <li
      style={{
        paddingBottom: "2rem",
        marginBottom: expensesLength - 1 !== idx ? "2rem" : 0,
        borderBottom: expensesLength - 1 !== idx ? "1px dotted #eee" : "none",
      }}
    >
      <div className="f-between">
        <div>
          <h3>
            {data.title} <span>(${data.price})</span>
          </h3>
          <p>{new Date(data.date).toLocaleDateString()}</p>
        </div>

        <div className="flex d-col gap-1">
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ListCard;
