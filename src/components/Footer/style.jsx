import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 46.875rem;
  height: 4.5625rem;

  margin: 0 auto;
  padding: 0 2.6875rem;

  background-color: var(--bg-footer);

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .nav__btn {
    background-color: transparent;
    color: var(--placeholder-text-grey);

    padding: 2px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--text-white);
      background-color: var(--icon-bg-grey);
    }
  }

  .--selected {
    color: var(--text-white);
  }

  && nav,
  nav ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    li {
      width: 2.8125rem;
      height: 100%;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;
