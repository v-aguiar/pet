import { BiHome, BiMessageRounded } from "react-icons/bi";
import { IoPaw } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";

import Button from "../Button/index.jsx";

import { StyledFooter } from "./style.jsx";

export default function Footer() {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li>
            <Button className="nav__btn">
              <BiHome size="1.5rem" />
              <span>Home</span>
            </Button>
          </li>
          <li>
            <Button className="nav__btn">
              <IoPaw size="1.5rem" />
              <span>Pets</span>
            </Button>
          </li>
          <li>
            <Button className="nav__btn">
              <BiMessageRounded size="1.5rem" />
              <span>Chat</span>
            </Button>
          </li>
          <li>
            <Button className="nav__btn">
              <BsPersonLinesFill size="1.5rem" />
              <span>Perfil</span>
            </Button>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
}
