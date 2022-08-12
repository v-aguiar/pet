export default function LocationForm({
  cepInput,
  cityInput,
  stateInput,
  districtInput,
  streetNameInput,
  complementInput
}) {
  return (
    <>
      <p>Dados - Localidade</p>

      <label className="--sr-only" htmlFor="cep">
        CEP
      </label>
      {cepInput}

      <label className="--sr-only" htmlFor="city">
        Cidade
      </label>
      {cityInput}

      <label className="--sr-only" htmlFor="state">
        Estado
      </label>
      {stateInput}

      <label className="--sr-only" htmlFor="district">
        Bairro
      </label>
      {districtInput}

      <label className="--sr-only" htmlFor="streetName">
        Nome da rua ou similar
      </label>
      {streetNameInput}

      <label className="--sr-only" htmlFor="complement">
        Complemento
      </label>
      {complementInput}
    </>
  );
}
