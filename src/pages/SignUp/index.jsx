import { Link } from "react-router-dom";

import { SignUpProvider } from "../../contexts/SignUpContext.jsx";

import SignUpForm from "./SignUpForm.jsx";
import { BottomText, Logo, StyledSignUp, Title } from "./style.jsx";

import logo from "../../assets/logo.svg";

export default function SignUp() {
  return (
    <StyledSignUp>
      <Logo src={logo} alt="logo" />
      <Title>Cadastre-se</Title>

      <SignUpProvider>
        <SignUpForm />
      </SignUpProvider>

      <Link to="/">
        <BottomText>Já possui uma conta? Clique aqui!</BottomText>
      </Link>
    </StyledSignUp>
  );
}
