import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import LocationInputs from "./LocationInputs.jsx";
import UserInputs from "./UserInputs.jsx";

import { SignUpContext } from "../../contexts/SignUpContext.jsx";
import { StyledForm } from "./style.jsx";

import { getInputDataFromSubmitEvent } from "./utils/signUpUtils.js";
import { createUser } from "../../services/user.js";

export default function SignUpForm() {
  const navigate = useNavigate();

  const { role, loading, setLoading, loadingComponent } = useContext(SignUpContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const signUpData = getInputDataFromSubmitEvent(e);
    signUpData.role = role;
    signUpData.isMainLocation = true;

    const response = await createUser(signUpData);
    if (response?.error) {
      alert(response.error.response.data);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <UserInputs />
      <LocationInputs />
      <Button type="submit">Entrar</Button>

      {loading && loadingComponent}
    </StyledForm>
  );
}
