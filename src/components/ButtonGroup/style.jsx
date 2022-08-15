import styled from "styled-components";

export const StyledButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const TabButton = styled.button`
  && {
    margin-bottom: 1rem;
  }

  &&.customButton {
    padding: 0.5rem 0.5rem;

    background-color: var(--bg-grey);
    color: var(--placeholder-text-grey);
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    border: 0;
    border-radius: 1rem;

    cursor: pointer;
  }

  &&.active {
    background-color: var(--icon-bg-grey);
    color: var(--text-white);
  }

  &&:hover {
    color: var(--text-white);
  }
`;
