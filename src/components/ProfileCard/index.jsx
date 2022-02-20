import React from "react";
import styles from "./styles.module.scss";

export default function ProfileCard({ avatar, name, phone, email, address, CardType,}) {
  return (
    <div className={`${styles.ProfileCard} ${styles[CardType]}`}>
      <h2>{CardType}</h2>
      <img src={avatar} alt={name} width='100px' />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}
