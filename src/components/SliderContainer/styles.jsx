import styled from "styled-components";

export const StyledSliderContainer = styled.section`
  width: 100%;
  max-width: 46.875rem;

  margin-bottom: 1.5rem;
  padding: 0 1.5625rem;

  display: flex;
  flex-direction: column;
`;

export const SliderHeader = styled.span`
  width: 100%;
  height: 2.94rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
  padding: 0 1.5625rem;

  border-radius: 1rem;

  background-color: var(--secondary);

  > p {
    color: var(--text-white);
    font-size: 0.93rem;
    font-weight: 600;
  }

  > small {
    color: var(--primary);
    font-size: 0.75rem;
    font-weight: 600;

    &&::hover {
      cursor: pointer;
      filter: brightness(1.2);
      filter: drop-shadow(0px 0px 1px var(--primary));
    }
  }
`;

export const Slider = styled.div`
  background-color: var(--icon-bg-grey);
  border-radius: 1rem;

  padding-left: 1.5625rem;

  width: 100%;
  height: 17.75rem;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
