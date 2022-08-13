import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 1.375rem;
  left: 0;
  width: 100%;
  height: 2.8125rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5625rem;

  background-color: inherit;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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
