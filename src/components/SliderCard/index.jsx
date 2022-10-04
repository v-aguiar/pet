import { IoMdMale, IoMdFemale } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { StyledCard, StyledDiv, StyledSpan, ImageWrapper } from "./style.jsx";

export const SliderCard = ({ imgUrl, name, sex, location, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <ImageWrapper>
        <img src={imgUrl} alt="card img" />
      </ImageWrapper>
      <StyledSpan>
        <p>{name}</p>
        {sex === "female" ? <IoMdFemale /> : <IoMdMale />}
      </StyledSpan>
      <StyledDiv>
        <HiOutlineLocationMarker
          style={{ backgroundColor: "transparent", marginRight: "0.25rem" }}
          color="var(--secondary)"
          size="0.875rem"
        />
        {location}
      </StyledDiv>
    </StyledCard>
  );
};
