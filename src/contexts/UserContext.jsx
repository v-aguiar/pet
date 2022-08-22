import { createContext, useState } from "react";

import useLoading from "../hooks/useLoading.jsx";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [loading, loadingModal, setLoading] = useLoading();

  // if (token) {
  //   const config = { headers: { Authorization: `Bearer ${token}` } };
  //   values.user = getById(config)
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       console.error("error: ", err);
  //       localStorage.removeItem("token");
  //       setToken(null);
  //       window.location.href = "/";
  //     });
  // }

  const values = { token, setToken, loading, loadingModal, setLoading };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
