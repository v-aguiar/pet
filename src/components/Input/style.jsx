import styled from "styled-components";

export const StyledInput = styled.input`
  height: 2.8125rem;
  width: 100%;

  padding: 1rem 1rem;

  border: 0;
  outline: 0;
  border-radius: 1rem;

  background-color: var(--icon-bg-grey);

  color: var(--text-white);

  &&::placeholder {
    color: var(--placeholder-text-grey);
  }

  /* Chrome, Safari, Edge, Opera */
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &&[type="number"] {
    -moz-appearance: textfield;
  }
`;
