import React, { useEffect, useState } from "react";

const currentDate = new Date().toISOString().split("T")[0];

const Form = ({ getFormData, initialData, setUpdateData }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    if (initialData !== null) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(formData, formData?.id ? "edit" : "create");
    setFormData({
      title: "",
      price: "",
      date: "",
    });
    setUpdateData(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          min={0}
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          max={currentDate}
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">{initialData !== null ? "Update" : "Add"}</button>
        <button type="Reset">Rest</button>
      </div>
    </form>
  );
};

export default Form;
