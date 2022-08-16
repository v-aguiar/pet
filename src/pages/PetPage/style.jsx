import styled from "styled-components";

export const StyledPetSection = styled.section`
  height: 100vh;
  width: 100%;

  background-color: var(--icon-bg-grey);
  color: var(--text-white);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 46.875rem;

  background-color: var(--icon-bg-grey);

  > img {
    width: 100%;
    max-height: 25rem;
    background-size: contain;
  }
`;

export const StyledDescription = styled.div`
  height: 100%;
  width: 100%;
  max-width: 46.875rem;

  padding: 2.625rem 1.5625rem;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.25rem 1.25rem 0px 0px;

  margin-top: -2rem;

  overflow-y: auto;
`;

export const StyledNameTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  > span {
    margin-top: 0.5rem;

    color: var(--secondary-t);
    font-size: 0.875rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const PetCharacteristics = styled.div`
  width: 100%;
  margin: 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CareTakerInfo = styled.div`
  margin-bottom: 1.5rem;

  height: 3.125rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .caretaker-info {
    display: flex;
    align-items: center;
  }

  .caretaker-contact-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    > .btn {
      width: 3rem;
      border-radius: 50%;
    }
  }
`;

export const PetDescription = styled.p`
  margin-bottom: 2.625rem;
`;
