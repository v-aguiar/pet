import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import SignUpForm from "./SignUpForm.jsx";

import { BottomText, Logo, StyledSignUp, Title } from "./style.jsx";

export default function SignUp() {
  return (
    <StyledSignUp>
      <Logo src={logo} alt="logo" />
      <Title>Cadastre-se</Title>

      <SignUpForm />

      <Link to="/">
        <BottomText>Já possui uma conta? Clique aqui!</BottomText>
      </Link>
    </StyledSignUp>
  );
}
