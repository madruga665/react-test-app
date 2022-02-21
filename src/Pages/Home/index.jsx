import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HomeContainer, LinksContainer } from "./styles";

const Home = () => {
  return (
      <HomeContainer>
        <Header title='Meu super app para testar libs' />
        <LinksContainer>
          <Link to='/cards'>Cartões</Link>
          <Link to='/form'>Formulário</Link>
        </LinksContainer>
        <Footer/>
      </HomeContainer>
      
  );
};

export default Home;
