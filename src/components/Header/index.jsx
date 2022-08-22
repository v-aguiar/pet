import { useContext } from "react";

import { BiSearchAlt, BiMenuAltLeft } from "react-icons/bi";
import { FaCat } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { UserContext } from "../../contexts/UserContext.jsx";
import useInput from "../../hooks/useInput.jsx";
import Button from "../Button/index.jsx";

import { StyledHeader, StyledForm } from "./style.jsx";

import { searchByPetType } from "../../services/user.js";
import { Link } from "react-router-dom";

export default function Header() {
  const [search, searchInput] = useInput({ id: "search", type: "text", placeholder: "Busca (ex: gato)" });

  const { token } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      // TODO -> finish search by category
      const response = searchByPetType(search, token);
      console.log("response", response);
    }, 3000);
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
          {searchInput}
          <Button className="search-button">
            <BiSearchAlt size="1.1rem" />
          </Button>
        </StyledForm>

        <Link to="/pets/register">
          <Button className="register-button">
            <FaCat size="0.875rem" />
          </Button>
        </Link>
      </IconContext.Provider>
    </StyledHeader>
  );
}
