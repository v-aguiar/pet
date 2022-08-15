import styled from "styled-components";

export const StyledPetSection = styled.section`
  height: 100vh;
  width: 100%;

  background-color: var(--primary);
  color: var(--text-white);

  /* padding-top: 6rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPetContainer = styled.div`
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescription = styled.div`
  height: 15.1875rem;
  width: 100%;

  padding: 42px 25px;

  background-color: var(--primary);
  color: var(--text-white);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
