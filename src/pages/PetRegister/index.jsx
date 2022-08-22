import Footer from "../../components/Footer/index.jsx";
import SecondaryHeader from "../../components/SecondaryHeader/index.jsx";

import { PetRegisterProvider } from "../../contexts/PetRegisterContext.jsx";
import { PetRegisterForm } from "./PetRegisterForm.jsx";

import { StyledPetRegister } from "./style.jsx";

export const PetRegister = () => {
  return (
    <StyledPetRegister>
      <SecondaryHeader />

      <PetRegisterProvider>
        <PetRegisterForm />
      </PetRegisterProvider>

      <Footer />
    </StyledPetRegister>
  );
};
