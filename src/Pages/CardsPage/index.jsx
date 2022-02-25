import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard/";
import { CardsContainer, CardsPageContainer } from "./styles";

const CardsPage = () => {
  const cardsData = [
    {
      CardType: "DarkProfileCard",
      address: "Rua Quinze, nº 406, Vila Zilda, Guarujá - SP",
      avatar: "https://github.com/madruga665.png",
      email: "madruga665@hotmail.com",
      name: "Madruga",
      phone: "(13) 98179-7296",
      darkMode: true
    },
    {
      CardType: "LightProfileCard",
      address: "Rua Quinze, nº 406, Vila Zilda, Guarujá - SP",
      avatar: "https://github.com/madruga665.png",
      email: "madruga665@hotmail.com",
      name: "Madruga",
      phone: "(13) 98179-7296",
      darkMode: false
    },
  ];

  return (
    <CardsPageContainer>
      <Header title='Cartões' link1='/' linkTitle1='Home' link2='/form' linkTitle2='Formulário' />
      <CardsContainer>
        {cardsData.map((card) => (
          <ProfileCard
            CardType={card.CardType}
            address={card.address}
            avatar={card.avatar}
            email={card.email}
            name={card.name}
            phone={card.phone}
            darkMode={card.darkMode}
          />
        ))}
      </CardsContainer>
      <Footer />
    </CardsPageContainer>
  );
};

export default CardsPage;
