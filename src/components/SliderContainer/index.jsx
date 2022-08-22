import { Slider, SliderHeader, StyledSliderContainer } from "./styles.jsx";

export const SliderContainer = ({ children, title }) => {
  return (
    <StyledSliderContainer>
      <SliderHeader>
        <p>{title}</p>
        <small>Ver mais</small>
      </SliderHeader>
      <Slider>{children}</Slider>
    </StyledSliderContainer>
  );
};
