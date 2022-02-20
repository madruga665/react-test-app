import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, LinksContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <h1>Meu Super app pra testar libs</h1>
      <LinksContainer>
        <Link to='/cards'>Cards</Link>
        <Link to='/form'>Form</Link>
      </LinksContainer>
    </HomeContainer>
  );
};

export default Home;
