import React from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard/";
import styles from "./styles.module.scss";

const CardsPage = () => {
  return (
    <section className={styles.CardsPageContainer}>
      <Header title='Cartões' link1='/' linkTitle1='Home' link2='/form' linkTitle2='Formulário' />
      <div className={styles.CardsContainer}>
        <ProfileCard
          CardType='DarkProfileCard'
          address='Rua Quinze, nº 406, Vila Zilda, Guarujá - SP'
          avatar='https://github.com/madruga665.png'
          email='madruga665@hotmail.com'
          name='Madruga'
          phone='(13) 98179-7296'
        />
        <ProfileCard
          CardType='LightProfileCard'
          address='Rua Quinze, nº 406, Vila Zilda, Guarujá - SP'
          avatar='https://github.com/madruga665.png'
          email='madruga665@hotmail.com'
          name='Madruga'
          phone='(13) 98179-7296'
        />
      </div>
    </section>
  );
};

export default CardsPage;
