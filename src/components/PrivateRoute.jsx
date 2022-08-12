import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

export default function PrivateRoute({ children }) {
  const { token } = useContext(UserContext);
  if (!token) {
    alert("⚠ Expired token! New login needed...");
  }

  return token ? children : <Navigate to="/" />;
}
