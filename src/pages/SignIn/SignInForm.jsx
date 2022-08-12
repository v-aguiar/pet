import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import useInput from "../../hooks/useInput.jsx";
import api from "../../services/api.js";

import { StyledForm } from "./style.jsx";

export default function SignInForm() {
  const [email, emailInput] = useInput({ id: "email", placeholder: "Email", required: true });
  const [password, passwordInput] = useInput({
    id: "password",
    placeholder: "Senha",
    type: "password",
    required: true
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const values = {
      email,
      password
    };

    try {
      const { data } = await api.post("/sign-in", { ...values });
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/sign-up"); // TODO: redirect to /feed
      setLoading(false);
    } catch (error) {
      alert(error.response.data);
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <label className="--sr-only" htmlFor="email">
        Email
      </label>
      {emailInput}

      <label className="--sr-only" htmlFor="password">
        Senha
      </label>
      {passwordInput}
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Entrar"}
      </Button>
    </StyledForm>
  );
}
