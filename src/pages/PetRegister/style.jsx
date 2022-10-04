import styled from "styled-components";

export const StyledPetRegister = styled.section`
  height: 100vh;
  width: 100%;
  padding: 6rem 1.5625rem;

  background-color: var(--primary);
  color: var(--text-white);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPetForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding-bottom: 4.5625rem;

  && input {
    margin-bottom: 1rem;
  }
`;

export const SelectInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  margin-bottom: 1rem;

  && :nth-child(2) {
    margin: 0 1rem;
  }

  > select {
    height: 2.8125rem;
    width: 100%;

    padding: 1rem;

    border: 0;
    outline: 0;
    border-radius: 1rem;

    background-color: var(--icon-bg-grey);

    color: var(--placeholder-text-grey);

    option {
      background-color: var(--icon-bg-grey);

      :first-child {
        background-color: var(--primary);
        color: var(--text-white);
      }

      :last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }
  }
`;
