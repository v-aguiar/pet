import styled from "styled-components";

export const StyledCharacteristic = styled.div`
  background-color: var(--icon-bg-grey);
  text-align: center;

  height: 4.125rem;
  min-width: 4.125rem;
  padding: 1.125rem;
  border-radius: 1rem;

  > p {
    color: var(--secondary);
    font-size: 0.75rem;
    font-weight: 500;
  }

  > small {
    color: var(--text-white);
    font-size: 0.625rem;
  }
`;
