import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [listData, setListData] = useState([]);
  const [updateData, setUpdateData] = useState(null);

  const getFormData = (data, type) => {
    if (type === "create") {
      const newDataWithId = { ...data, id: Math.floor(Math.random() * 9999) };
      setListData([newDataWithId, ...listData]);
    } else if (data?.id && type === "edit") {
      const modifyListData = listData.map((item) => {
        if (item.id === data?.id) {
          return data;
        }
        return item;
      });
      setListData(modifyListData);
    }
  };

  const handleUpdateList = (id, type) => {
    console.log(id, type);
    if (type === "remove") {
      const filteredList = listData.filter((item) => item.id !== id);
      setListData(filteredList);
    } else if (type === "edit") {
      const getData = listData.find((item) => item.id === id);
      if (getData?.id) setUpdateData(getData);
    }
  };

  return (
    <>
      <Header />
      <Form
        getFormData={getFormData}
        initialData={updateData}
        setUpdateData={setUpdateData}
      />
      <List list={listData} handleUpdateList={handleUpdateList} />
    </>
  );
};

export default App;
