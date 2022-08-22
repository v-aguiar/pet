import { createContext } from "react";

import useInput from "../hooks/useInput.jsx";

export const PetRegisterContext = createContext();

export const PetRegisterProvider = ({ children }) => {
  const [color, colorInput] = useInput({
    id: "color",
    type: "text",
    name: "color",
    placeholder: "Cor (ex. preto, cinza listrado com laranja"
  });
  const [name, nameInput] = useInput({
    id: "name",
    type: "text",
    name: "name",
    placeholder: "Nome",
    required: true
  });
  const [breed, breedInput] = useInput({
    id: "breed",
    type: "text",
    name: "breed",
    placeholder: "Raça (opcional)"
  });
  const [imgUrl, imgUrlInput] = useInput({
    id: "imgUrl",
    type: "url",
    name: "imgUrl",
    placeholder: "URL da imagem",
    required: true
  });
  const [description, descriptionInput] = useInput({
    id: "description",
    type: "text",
    name: "description",
    placeholder: "Descrição",
    required: true
  });

  const values = {
    color,
    colorInput,
    name,
    nameInput,
    breed,
    breedInput,
    description,
    descriptionInput,
    imgUrl,
    imgUrlInput
  };

  return <PetRegisterContext.Provider value={values}>{children}</PetRegisterContext.Provider>;
};
