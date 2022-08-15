import { Link } from "react-router-dom";

import { BsArrowLeft, BsFillPersonLinesFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import Button from "../Button/index.jsx";

import { StyledHeader } from "./style.jsx";

export default function SecondaryHeader() {
  return (
    <StyledHeader>
      <IconContext.Provider
        value={{
          style: {
            backgroundColor: "transparent"
          }
        }}
      >
        <Link to={-1}>
          <Button className="--btn-back">
            <BsArrowLeft />
          </Button>
        </Link>

        <Button className="--btn-contact">
          <BsFillPersonLinesFill size="0.875rem" />
        </Button>
      </IconContext.Provider>
    </StyledHeader>
  );
}
