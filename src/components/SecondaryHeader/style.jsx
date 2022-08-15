import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 1.375rem;
  left: (50%);
  width: 100%;
  max-width: 46.875rem;
  height: 2.8125rem;

  margin: 0 auto;
  padding: 0 1.5625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;

  .--btn-contact {
    width: 2.2rem;
    height: 2.2rem;

    background-color: var(--icon-bg-white);
    color: var(--secondary);
  }

  .--btn-back {
    width: 2.2rem;
    height: 2.2rem;

    background-color: var(--icon-bg-white);
    color: var(--bg-grey);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  margin: 0 12px;

  background-color: inherit;

  && input {
    width: 12.5rem;
  }

  .search-button {
    position: absolute;
    left: 9.5rem; // input width - button width

    width: 3rem;

    &&:hover {
      filter: brightness(1.1);
    }
  }
`;
