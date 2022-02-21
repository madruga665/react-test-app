import React from "react";
import { ProfileCardContainer } from "./styles";

export default function ProfileCard({ avatar, name, phone, email, address, CardType }) {
  return (
    <ProfileCardContainer>
      <h2>{CardType}</h2>
      <img src={avatar} alt={name} width='100px' />
      <p>Nome: {name}</p>
      <p>Telefone: {phone}</p>
      <p>Email: {email}</p>
      <p>Endereço: {address}</p>
    </ProfileCardContainer>
  );
}
