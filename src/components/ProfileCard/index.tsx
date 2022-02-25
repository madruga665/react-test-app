import { Content, ProfileCardContainer } from "./styles";

interface IProfileCardProps {
  avatar: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  CardType: string;
  darkMode: boolean;
}

export default function ProfileCard({ avatar, name, phone, email, address, CardType, darkMode }: IProfileCardProps) {
  return (
    <ProfileCardContainer darkMode={darkMode} >
      <h2>{CardType}</h2>
      <img src={avatar} alt={name} />
      <Content>
        <p>Nome: {name}</p>
        <p>Telefone: {phone}</p>
        <p>Email: {email}</p>
        <p>Endereço: {address}</p>
      </Content>
    </ProfileCardContainer>
  );
}
