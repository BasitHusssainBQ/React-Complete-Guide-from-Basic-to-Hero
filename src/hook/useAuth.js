import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem("access_token", data?.access_token ?? "");
    }

    if (data?.refresh_token) {
      localStorage.setItem("refresh_token", data?.refresh_token ?? "");
    }
  }, [data]);

  const handleUpdateAuth = (tokenData) => {
    setData(tokenData);
  };

  return {
    handleUpdateAuth,
    accessToken: localStorage.getItem("access_token"),
    refreshToken_token: localStorage.getItem("refresh_token"),
  };
};

export default useAuth;
