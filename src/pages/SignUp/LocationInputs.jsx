import { useContext } from "react";
import { SignUpContext } from "../../contexts/SignUpContext.jsx";

export default function LocationInputs() {
  const { CepInput, CityInput, StateInput, DistrictInput, StreetNameInput, ComplementInput } =
    useContext(SignUpContext);

  return (
    <>
      <p>Dados - Localidade</p>

      <label className="--sr-only" htmlFor="cep">
        CEP
      </label>
      {CepInput}

      <label className="--sr-only" htmlFor="city">
        Cidade
      </label>
      {CityInput}

      <label className="--sr-only" htmlFor="state">
        Estado
      </label>
      {StateInput}

      <label className="--sr-only" htmlFor="district">
        Bairro
      </label>
      {DistrictInput}

      <label className="--sr-only" htmlFor="streetName">
        Nome da rua ou similar
      </label>
      {StreetNameInput}

      <label className="--sr-only" htmlFor="complement">
        Complemento
      </label>
      {ComplementInput}
    </>
  );
}
