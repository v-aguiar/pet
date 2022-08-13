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

  const [name, NameInput] = useInput({ id: "name", placeholder: "Nome", required: true });
  const [email, EmailInput] = useInput({ id: "email", placeholder: "Email", required: true });
  const [phoneNumber, PhoneNumberInput] = useInput({
    id: "phoneNumber",
    placeholder: "Telefone (ex. 77999999999)",
    type: "number",
    required: true
  });
  const [imgUrl, ImgUrlInput] = useInput({
    id: "imgUrl",
    placeholder: "Imagem de perfil",
    type: "url",
    required: true
  });
  const [password, PasswordInput] = useInput({
    id: "password",
    placeholder: "Senha",
    type: "password",
    required: true
  });
  const [confirmPassword, ConfirmPasswordInput] = useInput({
    id: "confirmPassword",
    placeholder: "Confirmar senha",
    type: "password",
    required: true
  });
  const [description, DescriptionInput] = useInput({ id: "description", placeholder: "Descrição (Bio)" });
  const [city, CityInput, setCity] = useInput({ id: "city", placeholder: "Cidade", required: true });
  const [state, StateInput, setState] = useInput({ id: "state", placeholder: "Estado", required: true });
  const [district, DistrictInput, setDistrict] = useInput({ id: "district", placeholder: "Bairro" });
  const [streetName, StreetNameInput, setStreetName] = useInput({
    id: "streetName",
    placeholder: "Rua, avenida ou similar",
    required: true
  });
  const [complement, ComplementInput] = useInput({ id: "complement", placeholder: "Complemento" });
  const [cep, CepInput] = useInput({
    onBlur: checkCEP,
    id: "cep",
    placeholder: "CEP",
    maxlength: 8,
    type: "number"
  });

  const [loading, LoadingComponent, setLoading] = useLoading();

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
    NameInput,
    email,
    EmailInput,
    phoneNumber,
    PhoneNumberInput,
    imgUrl,
    ImgUrlInput,
    password,
    PasswordInput,
    confirmPassword,
    ConfirmPasswordInput,
    description,
    DescriptionInput,
    city,
    CityInput,
    setCity,
    state,
    StateInput,
    setState,
    district,
    DistrictInput,
    setDistrict,
    streetName,
    StreetNameInput,
    setStreetName,
    complement,
    ComplementInput,
    cep,
    CepInput,
    loading,
    LoadingComponent,
    setLoading
  };

  return <SignUpContext.Provider value={values}>{children}</SignUpContext.Provider>;
};
