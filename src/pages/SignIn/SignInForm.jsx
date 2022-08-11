import Button from "../../components/Button/index.jsx";
import { StyledForm } from "./style.jsx";

export default function SignInForm({ emailInput, passwordInput }) {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <label className="--sr-only" htmlFor="email">
        Email
      </label>
      {emailInput}

      <label className="--sr-only" htmlFor="password">
        Password
      </label>
      {passwordInput}
      <Button type="submit">Entrar</Button>
    </StyledForm>
  );
}
