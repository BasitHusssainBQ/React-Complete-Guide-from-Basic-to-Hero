import React, { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState(localStorage.accessToken);

  // useEffect(() => {
  //   if(!localStorage.accessToken) {
  //     localStorage.accessToken = localStorage
  //   }
  // })

  return data;
};

export default useLocalStorage;
