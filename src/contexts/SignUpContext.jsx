import { createContext, useState } from "react";

import useLoading from "../hooks/useLoading.jsx";
import useInput from "../hooks/useInput.jsx";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [role, setRole] = useState("default");

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
  const [description, descriptionInput] = useInput({ id: "description", placeholder: "Descrição (Bio)" });
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

  const [loading, loadingModal, setLoading] = useLoading();

  function handleRoleClick(e) {
    const hashRoles = {
      ["Lar temporário"]: "temporaryCare",
      Comum: "default",
      Organização: "organization"
    };

    setRole(hashRoles[e.target.name]);
  }

  const values = {
    role,
    handleRoleClick,
    name,
    nameInput,
    email,
    emailInput,
    phoneNumber,
    phoneNumberInput,
    imgUrl,
    imgUrlInput,
    password,
    passwordInput,
    confirmPassword,
    confirmPasswordInput,
    description,
    descriptionInput,
    city,
    cityInput,
    setCity,
    state,
    stateInput,
    setState,
    district,
    districtInput,
    setDistrict,
    streetName,
    streetNameInput,
    setStreetName,
    complement,
    complementInput,
    cep,
    cepInput,
    loading,
    loadingModal,
    setLoading
  };

  return <SignUpContext.Provider value={values}>{children}</SignUpContext.Provider>;
};
