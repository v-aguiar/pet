import { IoMdMale, IoMdFemale } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { StyledCard } from "./style.jsx";

export const SliderCard = ({ imgUrl, name, sex, location, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <img src={imgUrl} alt="card img" />
      <span>
        <p>{name}</p>
        {sex === "female" ? <IoMdFemale /> : <IoMdMale />}
      </span>
      <div>
        <HiOutlineLocationMarker
          style={{ backgroundColor: "transparent", marginRight: "0.25rem" }}
          color="var(--secondary)"
          size="0.875rem"
        />
        {location}
      </div>
    </StyledCard>
  );
};
