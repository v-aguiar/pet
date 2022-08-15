import Footer from "../../components/Footer/index.jsx";
import SecondaryHeader from "../../components/SecondaryHeader/index.jsx";

import { StyledDescription, StyledPetContainer, StyledPetSection } from "./style";
import notYet from "../../assets/waiting.svg";

export default function PetPage() {
  return (
    <StyledPetSection>
      <SecondaryHeader>Header</SecondaryHeader>

      {/* TODO -> Add pet page content to a separate component */}
      <StyledPetContainer>
        <img src={notYet} alt="pet" />
      </StyledPetContainer>
      <StyledDescription>
        <div>User contact info</div>
      </StyledDescription>

      <Footer>Footer</Footer>
    </StyledPetSection>
  );
}
