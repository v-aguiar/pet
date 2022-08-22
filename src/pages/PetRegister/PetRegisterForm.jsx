import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/index.jsx";
import ButtonGroup from "../../components/ButtonGroup/index.jsx";

import { PetRegisterContext } from "../../contexts/PetRegisterContext.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

import { SelectInputs, StyledPetForm } from "./style.jsx";
import api from "../../services/api.js"; // TODO -> create a service function to handle pet registration

export const PetRegisterForm = () => {
  const [spayedOrNeutered, setSpayedOrNeutered] = useState(false);
  const [selectValues, setSelectValues] = useState({
    type: "other",
    sex: "",
    status: ""
  });

  const {
    color,
    colorInput,
    name,
    nameInput,
    breed,
    breedInput,
    description,
    descriptionInput,
    imgUrl: imageUrl,
    imgUrlInput
  } = useContext(PetRegisterContext);

  const { loading, loadingModal, setLoading, token } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const values = {
      color,
      name,
      breed,
      description,
      images: [{ imageUrl }],
      spayedOrNeutered,
      ...selectValues
    };

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await api.post("/pets", { ...values }, config);

      alert(data);
      setLoading(false);
      navigate("/feed");
    } catch (error) {
      alert(error.response.data);
      setLoading(false);
    }
  };

  const handleButtonChange = (e) => {
    const value = e.target.innerText;
    setSpayedOrNeutered(value === "Sim" ? true : false);
  };

  const handleSelectChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    setSelectValues({ ...selectValues, [targetName]: targetValue });
  };

  return (
    <StyledPetForm id="pet-register-form" onSubmit={handleSubmit}>
      <label htmlFor="color" className="--sr-only">
        Url da imagem do pet
      </label>
      {imgUrlInput}
      <label htmlFor="color" className="--sr-only">
        Cor
      </label>
      {colorInput}
      <label htmlFor="name" className="--sr-only">
        Nome
      </label>
      {nameInput}
      <label htmlFor="breed" className="--sr-only">
        Raça
      </label>
      {breedInput}
      <label htmlFor="description" className="--sr-only">
        Description
      </label>
      {descriptionInput}

      <ButtonGroup buttons={["Sim", "Não"]} callback={handleButtonChange} />

      <SelectInputs>
        <select name="type" form="pet-register-form" onChange={handleSelectChange} required>
          <option value={null}>Tipo</option>
          <option value="cat">Gato</option>
          <option value="dog">Cachorro</option>
          <option value="bird">Pássaro</option>
          <option value="rabbit">Coelho</option>
          <option value="rodent">Roedor</option>
          <option value="other">Outro</option>
        </select>

        <select name="sex" form="pet-register-form" onChange={handleSelectChange} required>
          <option value={null}>Sexo</option>
          <option value="male">Macho</option>
          <option value="female">Fêmea</option>
        </select>

        <select name="status" form="pet-register-form" onChange={handleSelectChange} required>
          <option value={null}>Status</option>
          <option value="waiting">Aguardando</option>
          <option value="temporaryCare">Lar Temporário</option>
        </select>
      </SelectInputs>

      <Button type="submit" disabled={loading}>
        Cadastrar
      </Button>

      {loading && loadingModal}
    </StyledPetForm>
  );
};
