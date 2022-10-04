import styled from "styled-components";

export const StyledSignIn = styled.section`
  /* position: absolute; */

  padding: 0 1.5625rem;
  max-width: 26.5625rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--text-white);

  p {
    color: var(--subtitle-text-grey);
    font-size: 0.875rem;
    font-style: italic;
    text-align: center;
    line-height: 1.125rem;
    margin: 1.75rem 0;
  }
`;

export const Logo = styled.img`
  width: 10.625rem;
  margin-bottom: 1.5rem;
  margin-top: 4.25rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 100%;

  input {
    margin-bottom: 1rem;
  }

  button {
    margin-bottom: 1.625rem;
  }
`;

export const BottomText = styled.p`
  font-style: italic;

  &&:hover {
    filter: brightness(1.2);

    cursor: pointer;
  }
`;
