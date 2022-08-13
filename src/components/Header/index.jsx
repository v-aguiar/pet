import { BiSearchAlt, BiMenuAltLeft } from "react-icons/bi";
import { FaCat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import useInput from "../../hooks/useInput.jsx";
import Button from "../Button/index.jsx";

import { StyledHeader, StyledForm } from "./style.jsx";

export default function Header() {
  const [search, SearchInput] = useInput({ id: "search", type: "text", placeholder: "Busca (ex: gato)" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search); // TODO -> search by category
  }

  return (
    <StyledHeader>
      <IconContext.Provider
        value={{
          style: {
            backgroundColor: "transparent"
          }
        }}
      >
        <Button className="menu-button">
          <BiMenuAltLeft />
        </Button>
        <StyledForm onSubmit={handleSubmit}>
          <SearchInput />
          <Button className="search-button">
            <BiSearchAlt size="1.1rem" />
          </Button>
        </StyledForm>
        <Button className="register-button">
          <FaCat size="0.875rem" />
        </Button>
      </IconContext.Provider>
    </StyledHeader>
  );
}
