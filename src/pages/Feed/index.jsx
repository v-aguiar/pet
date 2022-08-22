import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";

import { SliderCard } from "../../components/SliderCard/index.jsx";
import { SliderContainer } from "../../components/SliderContainer/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

import { StyledFeed } from "./style.jsx";

import { getPetsByLocation } from "../../services/pets.js";

export const Feed = () => {
  const [pets, setPets] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(top);
    const getPets = async () => {
      const pets = await getPetsByLocation(token);

      setPets(pets);
    };

    getPets();
  }, []);

  return (
    <StyledFeed>
      <Header />
      <SliderContainer title={"Adote um pet pertinho de você!"}>
        {pets.map((pet) => (
          <SliderCard
            key={uuid()}
            sex={pet.sex}
            name={pet.name}
            imgUrl={pet.PetImages[0].imageUrl}
            location="Ouro Branco, MG"
            onClick={() => {
              navigate(`/pet/${pet.id}`);
            }}
          />
        ))}
      </SliderContainer>

      <SliderContainer title={"Conheça organizações por perto!"}>
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="male"
          name="Catito"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfGRhbJwxhNxXqMMpkmzuuFgVzmyV4BBW2pQdygzY2g&s"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catitatita"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GLVLXe-UstBcBLl5Z8AbW5LNRij3unRc3bXd-pE&s"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/564x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg"
          location="Ouro Branco, MG"
        />
        <SliderCard
          sex="female"
          name="Catita"
          imgUrl="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg"
          location="Ouro Branco, MG"
        />
      </SliderContainer>
      <Footer />
    </StyledFeed>
  );
};
