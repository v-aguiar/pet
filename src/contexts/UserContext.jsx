import { createContext, useState } from "react";
import { getById } from "../services/user.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  let user = {};

  if (token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    user = getById(config);

    console.log("user: ", user);
  }

  const values = { token, setToken, user };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
