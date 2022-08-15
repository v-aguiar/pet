import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import useInput from "../../hooks/useInput.jsx";
import useLoading from "../../hooks/useLoading.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

import api from "../../services/api.js";

import { StyledForm } from "./style.jsx";

export default function SignInForm() {
  const [loading, loadingModal, setLoading] = useLoading();
  const [email, emailInput] = useInput({ id: "email", placeholder: "Email", required: true });
  const [password, passwordInput] = useInput({
    id: "password",
    placeholder: "Senha",
    type: "password",
    required: true
  });

  const { setToken } = useContext(UserContext);
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
      setLoading(false);
      setToken(data.token);
      navigate("/feed");
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
        Entrar
      </Button>

      {loading && loadingModal}
    </StyledForm>
  );
}
