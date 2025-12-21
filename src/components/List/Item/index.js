import React from "react";

const Item = ({ data, handleUpdate }) => {
  return (
    <li>
      <p>{data.title}</p>
      <p>{data.price}</p>
      <p>{data?.date ?? ""}</p>
      <button type="button" onClick={() => handleUpdate(data.id, "edit")}>
        Edit
      </button>
      <button type="button" onClick={() => handleUpdate(data.id, "remove")}>
        Delete
      </button>
    </li>
  );
};

export default Item;
