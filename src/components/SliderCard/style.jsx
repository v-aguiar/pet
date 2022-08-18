import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: var(--text-white);
  color: var(--text-grey-card);

  height: 100%;
  min-width: 220px;
  max-width: 220px;

  margin-right: 1rem;
  border-radius: 1rem;

  &&:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  > img {
    width: 100%;
    height: 12.7225rem;
    max-height: 12.7225rem;
    background-color: #eaeaea;

    border-radius: 1rem 1rem 3.75rem 0;
  }

  > span {
    width: 100%;
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div {
    font-size: 0.625rem;
    display: flex;
    align-items: center;

    padding: 0 1rem 1.125rem 1rem;
  }
`;
