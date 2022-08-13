import { useContext } from "react";

import { SignUpContext } from "../../contexts/SignUpContext.jsx";
import ButtonGroup from "../../components/ButtonGroup";

export default function UserInputs() {
  const {
    handleRoleClick,
    NameInput,
    EmailInput,
    PhoneNumberInput,
    ImgUrlInput,
    PasswordInput,
    ConfirmPasswordInput,
    DescriptionInput
  } = useContext(SignUpContext);

  return (
    <>
      <p>Dados - Usuário</p>

      <ButtonGroup buttons={["Comum", "Lar temporário", "Organização"]} callback={handleRoleClick} />

      <label className="--sr-only" htmlFor="name">
        Nome
      </label>
      <NameInput />

      <label className="--sr-only" htmlFor="email">
        Email
      </label>
      <EmailInput />

      <label className="--sr-only" htmlFor="password">
        Senha
      </label>
      <PasswordInput />

      <label className="--sr-only" htmlFor="confirmPassword">
        Confirmar senha
      </label>
      <ConfirmPasswordInput />

      <label className="--sr-only" htmlFor="phoneNumber">
        Número de telefone
      </label>
      <PhoneNumberInput />

      <label className="--sr-only" htmlFor="imgUrl">
        Url da imagem de perfil
      </label>
      <ImgUrlInput />

      <label className="--sr-only" htmlFor="description">
        Descrição (Bio)
      </label>
      <DescriptionInput />
    </>
  );
}
