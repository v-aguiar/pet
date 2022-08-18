import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMessageSquare, FiPhone } from "react-icons/fi";

import ExpandableContent from "react-expandable-content";

import Footer from "../../components/Footer/index.jsx";
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

export default function PetPage() {
  return (
    <StyledPetSection>
      <SecondaryHeader />

      {/* TODO -> Add pet page content to a separate components */}
      <StyledPetContainer>
        <img src={notYet} alt="pet" />
      </StyledPetContainer>

      <StyledDescription>
        <ExpandableContent expandText="" collapseText="" showIcon={false} maxHeight={362} darkMode={true}>
          <StyledNameTitle>
            <p>Pet Name</p>
            <span>
              <HiOutlineLocationMarker
                style={{ backgroundColor: "transparent", marginRight: "0.25rem" }}
                color="var(--secondary)"
                size="1.25rem"
              />
              Cidade, UF
            </span>
          </StyledNameTitle>

          <PetCharacteristics>
            <Characteristic blockKey={"Sexo"} blockValue={"Fêmea"} />
            <Characteristic blockKey={"Cor"} blockValue={"Preto"} />
            <Characteristic blockKey={"Raça"} blockValue={"SRD"} />
            <Characteristic blockKey={"Peso"} blockValue={"2kg"} />
          </PetCharacteristics>

          <CareTakerInfo>
            <span className="caretaker-info">
              <img src={notYet} alt="Caretaker" />
              <span>
                <p>Sob cuidados de: </p>
                <p>Nome Tutor(a)</p>
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

          <PetDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A optio vitae voluptatem. Aut eligendi,
            eius consequuntur quis cum incidunt autem fugit numquam error sed! Quaerat odio numquam atque
            inventore consequatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. A optio vitae
            voluptatem. Aut eligendi, eius consequuntur quis cum incidunt autem fugit numquam error sed!
            Quaerat odio numquam atque inventore consequatur! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A optio vitae voluptatem. Aut eligendi, eius consequuntur quis cum incidunt
            autem fugit numquam error sed! Quaerat odio numquam atque inventore consequatur! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. A optio vitae voluptatem. Aut eligendi, eius consequuntur
            quis cum incidunt autem fugit numquam error sed! Quaerat odio numquam atque inventore consequatur!
          </PetDescription>
        </ExpandableContent>
      </StyledDescription>

      <Footer />
    </StyledPetSection>
  );
}
