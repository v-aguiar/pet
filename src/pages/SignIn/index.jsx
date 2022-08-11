import useInput from "../../hooks/useInput.jsx";
import SignInForm from "./SignInForm.jsx";

import { BottomText, Logo, StyledSignIn, Title } from "./style.jsx";

import logo from "../../assets/logo.svg";

export default function SignIn() {
  const [email, emailInput] = useInput({ id: "email", placeholder: "Email", required: true });
  const [password, passwordInput] = useInput({
    id: "password",
    placeholder: "Password",
    type: "password",
    required: true
  });

  console.log("email: ", email);
  console.log("password: ", password);

  return (
    <StyledSignIn>
      <Logo src={logo} alt="logo" />
      <Title>Entre agora e adote um pet</Title>
      <p>
        Faça a diferença ajudando a diminuir o número de pets abandonados e você ainda ganha companhia e uma
        amizade sincera pra vida!
      </p>

      <SignInForm action="#" emailInput={emailInput} passwordInput={passwordInput} />

      <BottomText>Não possui uma conta? Cadastre-se!</BottomText>
    </StyledSignIn>
  );
}
