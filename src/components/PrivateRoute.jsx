import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

export default function PrivateRoute({ children }) {
  const { token } = useContext(UserContext);
  if (!token) {
    alert("⚠ Sua sessão expirou! Faça o login novamente...");
    const navigate = useNavigate();
    navigate("/");
  }

  return token ? children : <Navigate to="/" />;
}
