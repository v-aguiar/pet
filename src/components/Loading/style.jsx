import styled from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-t);
  fill-opacity: 50%;
  color: var(--text-white);

  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;

  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;
`;
