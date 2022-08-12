export default function UserForm({
  nameInput,
  emailInput,
  phoneNumberInput,
  imgUrlInput,
  passwordInput,
  confirmPasswordInput
}) {
  return (
    <>
      <p>Dados - Usuário</p>

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
    </>
  );
}
