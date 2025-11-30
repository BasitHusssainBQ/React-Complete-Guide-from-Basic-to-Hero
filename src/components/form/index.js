import React, { useState } from "react";
import style from "./index.module.css";

const today = new Date();
const currentDate = today.toISOString().split[0];

const Form = (props) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(null);
  // const [date, setDate] = useState(null);
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // const handleTitleChange = (e) => setTitle(e.target.value);

  // const handlePriceChange = (e) => setPrice(e.target.value);

  // const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.price || !data.date) {
      alert("Input Fields are required");
    }

    console.log(data);
    props.getExpense(data);

    setData({
      title: "",
      price: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`${style.card} sm-container`}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cost">Cost ($)</label> <br />
        <input
          type="number"
          name="price"
          id="cost"
          value={data.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label> <br />
        <input
          type="date"
          name="date"
          id="date"
          value={data.date}
          onChange={handleChange}
          max={currentDate}
        />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button
          className="btn-primary"
          style={{ marginRight: "1rem" }}
          type="submit"
        >
          Add Expense
        </button>
        <button className="btn-secondary" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
