import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--text-white);
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;

  background-color: var(--secondary);

  border: 0;
  outline: 0;
  border-radius: 1rem;

  width: 100%;
  height: 2.8125rem;

  &&:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;
