import React from "react";
import ListCard from "./ListCard";
import style from "./index.module.css";

const ExpenseList = ({ expenses }) => {
  return (
    <div className={`${style.card} sm-container`}>
      {expenses.length !== 0 ? (
        <ul>
          {expenses.map((item, idx) => (
            <ListCard
              data={item}
              idx={idx}
              expensesLength={expenses.length}
              key={item.id}
            />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", fontSize: "2rem", fontWeight: 500 }}>
          No Data found!
        </p>
      )}
    </div>
  );
};

export default ExpenseList;
