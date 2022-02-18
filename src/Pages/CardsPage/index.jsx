import React from "react";
import ProfileCard from "../../components/ProfileCard/";
import styles from "./styles.module.scss";

const CardsPage = () => {
  return (
    <section className={styles.CardsPageContainer}>
      <h2>Cartões</h2>
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
