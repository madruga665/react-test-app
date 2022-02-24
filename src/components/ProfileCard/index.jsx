import React from "react";
import { Content, ProfileCardContainer } from "./styles";

export default function ProfileCard({ avatar, name, phone, email, address, CardType }) {
  return (
    <ProfileCardContainer CardType={CardType}>
      <h2>{CardType}</h2>
      <img src={avatar} alt={name} width='100px' />
      <Content>
        <p>Nome: {name}</p>
        <p>Telefone: {phone}</p>
        <p>Email: {email}</p>
        <p>Endereço: {address}</p>
      </Content>
    </ProfileCardContainer>
  );
}
