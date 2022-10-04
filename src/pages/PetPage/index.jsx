import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMessageSquare, FiPhone } from "react-icons/fi";

import ExpandableContent from "react-expandable-content";

import { UserContext } from "../../contexts/UserContext.jsx";

import SecondaryHeader from "../../components/SecondaryHeader/index.jsx";
import Characteristic from "../../components/CharacteristicBlock/index.jsx";
import Button from "../../components/Button/index.jsx";

import {
  PetCharacteristics,
  StyledDescription,
  StyledNameTitle,
  StyledPetContainer,
  StyledPetSection,
  CareTakerInfo,
  PetDescription
} from "./style";

import notYet from "../../assets/waiting.svg";
import { getPetById } from "../../services/pets.js";
import { getById } from "../../services/user.js";

export const PetPage = () => {
  const [pet, setPet] = useState(null);
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  const { token, loading, setLoading, loadingModal } = useContext(UserContext);

  useEffect(() => {
    const getPetData = async () => {
      setLoading(true);
      try {
        const petData = await getPetById(token, id);
        setPet(petData);
        setUserData({ ...petData.user, ...petData.user.UserLocation[0] });
        setLoading(false);
      } catch (error) {
        console.error("⚠ Something went wrong when fetching pet data: ", error);
        setLoading(false);
      }
    };

    getPetData();
  }, []);

  return (
    <StyledPetSection>
      <SecondaryHeader />

      {/* TODO -> Add pet page content to a separate components */}
      <StyledPetContainer>
        <img src={pet ? pet.PetImages[0].imageUrl : notYet} alt="pet" />
      </StyledPetContainer>

      <StyledDescription>
        <ExpandableContent expandText="" collapseText="" showIcon={false} maxHeight={362} darkMode={true}>
          <StyledNameTitle>
            <p>{pet ? pet.name : ""}</p>
            <span>
              <HiOutlineLocationMarker
                style={{ backgroundColor: "transparent", marginRight: "0.25rem" }}
                color="var(--secondary)"
                size="1.25rem"
              />
              {userData ? `${userData.location.city}, ${userData.location.state}` : ""}
            </span>
          </StyledNameTitle>
          {pet ? (
            <PetCharacteristics>
              <Characteristic blockKey={"Sexo"} blockValue={pet.sex === "female" ? "Fêmea" : "Macho"} />
              <Characteristic blockKey={"Cor"} blockValue={pet.color.split()[0]} />
              <Characteristic blockKey={"Raça"} blockValue={pet.breed} />
              <Characteristic blockKey={"Peso"} blockValue={"2kg"} />
            </PetCharacteristics>
          ) : (
            ""
          )}

          <CareTakerInfo>
            <span className="caretaker-info">
              <img src={userData ? userData.imgUrl : notYet} alt="Caretaker" />
              <span>
                <p>Sob cuidados de: </p>
                <p>{userData ? userData.name : ""}</p>
              </span>
            </span>

            <span className="caretaker-contact-buttons">
              <Button className="btn --phone">
                <FiPhone color="var(--text-white)" size="1.25rem" />
              </Button>
              <Button className="btn --msg">
                <FiMessageSquare color="var(--text-white)" size="1.25rem" />
              </Button>
            </span>
          </CareTakerInfo>

          <PetDescription>{pet ? pet.description : "lorem ipsum"}</PetDescription>
        </ExpandableContent>
      </StyledDescription>

      {loading && loadingModal}
    </StyledPetSection>
  );
};
