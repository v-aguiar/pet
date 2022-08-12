import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import useInput from "../../hooks/useInput.jsx";
import { createUser } from "../../services/user.js";
import LocationForm from "./LocationForm.jsx";

import { StyledForm } from "./style.jsx";
import UserForm from "./UserForm.jsx";

export default function SignUpForm() {
  const navigate = useNavigate();

  const checkCEP = async (e) => {
    if (!e.target.value) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${e.target.value}/json/`);
      const data = await response.json();

      setCity(data.localidade);
      setState(data.uf);
      setDistrict(data.bairro);
      setStreetName(data.logradouro);
    } catch (error) {
      window.alert("⚠ CEP não encontrado...");
      console.log(error);
    }
  };

  const [name, nameInput] = useInput({ id: "name", placeholder: "Nome", required: true });
  const [email, emailInput] = useInput({ id: "email", placeholder: "Email", required: true });
  const [phoneNumber, phoneNumberInput] = useInput({
    id: "phoneNumber",
    placeholder: "Telefone (ex. 77999999999)",
    type: "number",
    required: true
  });
  const [imgUrl, imgUrlInput] = useInput({
    id: "imgUrl",
    placeholder: "Imagem de perfil",
    type: "url",
    required: true
  });
  const [password, passwordInput] = useInput({
    id: "password",
    placeholder: "Senha",
    type: "password",
    required: true
  });
  const [confirmPassword, confirmPasswordInput] = useInput({
    id: "confirmPassword",
    placeholder: "Confirmar senha",
    type: "password",
    required: true
  });
  const [city, cityInput, setCity] = useInput({ id: "city", placeholder: "Cidade", required: true });
  const [state, stateInput, setState] = useInput({ id: "state", placeholder: "Estado", required: true });
  const [district, districtInput, setDistrict] = useInput({ id: "district", placeholder: "Bairro" });
  const [streetName, streetNameInput, setStreetName] = useInput({
    id: "streetName",
    placeholder: "Rua, avenida ou similar",
    required: true
  });
  const [complement, complementInput] = useInput({ id: "complement", placeholder: "Complemento" });
  const [cep, cepInput] = useInput({
    onBlur: checkCEP,
    id: "cep",
    placeholder: "CEP",
    maxlength: 8,
    type: "number"
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new Map();
    Object.values(Object.values({ ...e.target })).forEach((el) => {
      if (!el.value || el.value === "") return;
      data.set(el.id, el.value);
    });

    const signUpData = Object.fromEntries(data.entries());

    signUpData.role = "default"; // TODO - add role group input
    signUpData.isMainLocation = true;

    const response = await createUser(signUpData);
    if (response?.error) {
      alert(response.error.response.data);
      return;
    }

    navigate("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <UserForm
        nameInput={nameInput}
        emailInput={emailInput}
        passwordInput={passwordInput}
        confirmPasswordInput={confirmPasswordInput}
        phoneNumberInput={phoneNumberInput}
        imgUrlInput={imgUrlInput}
      />
      <LocationForm
        cepInput={cepInput}
        cityInput={cityInput}
        stateInput={stateInput}
        districtInput={districtInput}
        streetNameInput={streetNameInput}
        complementInput={complementInput}
      />
      <Button type="submit">Entrar</Button>
    </StyledForm>
  );
}
