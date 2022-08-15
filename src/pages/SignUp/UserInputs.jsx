import { useContext } from "react";

import { SignUpContext } from "../../contexts/SignUpContext.jsx";
import ButtonGroup from "../../components/ButtonGroup";

export default function UserInputs() {
  const {
    handleRoleClick,
    nameInput,
    emailInput,
    phoneNumberInput,
    imgUrlInput,
    passwordInput,
    confirmPasswordInput,
    descriptionInput
  } = useContext(SignUpContext);

  return (
    <>
      <p>Dados - Usuário</p>

      <ButtonGroup buttons={["Comum", "Lar temporário", "Organização"]} callback={handleRoleClick} />

      <label className="--sr-only" htmlFor="name">
        Nome
      </label>
      {nameInput}

      <label className="--sr-only" htmlFor="email">
        Email
      </label>
      {emailInput}

      <label className="--sr-only" htmlFor="password">
        Senha
      </label>
      {passwordInput}

      <label className="--sr-only" htmlFor="confirmPassword">
        Confirmar senha
      </label>
      {confirmPasswordInput}

      <label className="--sr-only" htmlFor="phoneNumber">
        Número de telefone
      </label>
      {phoneNumberInput}

      <label className="--sr-only" htmlFor="imgUrl">
        Url da imagem de perfil
      </label>
      {imgUrlInput}

      <label className="--sr-only" htmlFor="description">
        Descrição (Bio)
      </label>
      {descriptionInput}
    </>
  );
}
