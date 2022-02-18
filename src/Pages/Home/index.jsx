import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <h1>Meu Super app pra testar libs</h1>
      <Link to='/cards'>Cards</Link>
      <Link to='/form'>Form</Link>
    </div>
  );
};

export default Home;
