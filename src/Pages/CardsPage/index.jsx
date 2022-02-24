import MaterialCard from "components/MaterialCard";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard/";
import { CardsContainer, CardsPageContainer } from "./styles";

const CardsPage = () => {
  return (
    <CardsPageContainer>
      <Header title='Cartões' link1='/' linkTitle1='Home' link2='/form' linkTitle2='Formulário' />
      <CardsContainer>
        <ProfileCard
          CardType='DarkProfileCard'
          address='Rua Quinze, nº 406, Vila Zilda, Guarujá - SP'
          avatar='https://github.com/madruga665.png'
          email='madruga665@hotmail.com'
          name='Madruga'
          phone='(13) 98179-7296'
          dark
        />
        <ProfileCard
          CardType='LightProfileCard'
          address='Rua Quinze, nº 406, Vila Zilda, Guarujá - SP'
          avatar='https://github.com/madruga665.png'
          email='madruga665@hotmail.com'
          name='Madruga'
          phone='(13) 98179-7296'
        />
        <MaterialCard avatar='https://github.com/madruga665.png' name='Madruga' position="Desenvolvedor Web" />
      </CardsContainer>
      <Footer />
    </CardsPageContainer>
  );
};

export default CardsPage;
