import React from "react";
import Item from "./Item";

const List = ({ list, handleUpdateList }) => {
  const handleUpdate = (id, type) => {
    handleUpdateList(id, type);
  };
  return (
    <div>
      <ul>
        {list?.length ? (
          <>
            {list.map((item) => (
              <Item key={item.id} data={item} handleUpdate={handleUpdate} />
            ))}
          </>
        ) : (
          <p>No record found!</p>
        )}
      </ul>
    </div>
  );
};

export default List;
