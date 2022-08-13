import { BiSearchAlt } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import useInput from "../../hooks/useInput.jsx";
import Button from "../Button/index.jsx";

import { StyledHeader, StyledForm } from "./style.jsx";

export default function Header() {
  const [search, SearchInput] = useInput({ id: "search", type: "text", placeholder: "Busca (ex: gato)" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
  }

  return (
    <StyledHeader>
      <span>Menu</span>
      <StyledForm onSubmit={handleSubmit}>
        <SearchInput />
        <IconContext.Provider
          value={{
            style: {
              backgroundColor: "transparent"
            }
          }}
        >
          <Button className="search-button">
            <BiSearchAlt />
          </Button>
        </IconContext.Provider>
      </StyledForm>
      <span>Patinha :3</span>
    </StyledHeader>
  );
}
