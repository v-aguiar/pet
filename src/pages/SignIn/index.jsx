import { Link } from "react-router-dom";

import { BottomText, Logo, StyledSignIn, Title } from "./style.jsx";
import SignInForm from "./SignInForm.jsx";

import logo from "../../assets/logo.svg";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Logo src={logo} alt="logo" />
      <Title>Entre agora e adote um pet</Title>
      <p>
        Faça a diferença ajudando a diminuir o número de pets abandonados e você ainda ganha companhia e uma
        amizade sincera pra vida!
      </p>

      <SignInForm />

      <Link to="/sign-up">
        <BottomText>Não possui uma conta? Cadastre-se!</BottomText>
      </Link>
    </StyledSignIn>
  );
};
