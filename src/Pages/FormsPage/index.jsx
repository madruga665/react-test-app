import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import InputDropdown from "../../components/InputDropdown";
import Button from "../../components/Button";
import ProfileCard from "../../components/ProfileCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { schema } from "../../validate/schema";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardsContainer, FormsPageContainer, NotCardsMessage } from "./styles";

const FormsPage = () => {
  const [cards, setCards] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (newCard) => {
    setCards([...cards, newCard]);
    reset();
  };
  return (
    <FormsPageContainer>
      <Header title='Formulário' link1='/' linkTitle1='Home' link2='/cards' linkTitle2='Cartões' />
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <InputField id='name' label='Nome' type='text' register={register} errors={errors} />
        <InputField id='email' label='Email' type='email' register={register} errors={errors} />
        <InputField id='phone' label='Telefone' type='text' register={register} errors={errors} />
        <InputField
          id='profilePicture'
          label='Foto de Perfil'
          type='text'
          register={register}
          errors={errors}
        />
        <InputField id='address' label='Endereço' type='text' register={register} errors={errors} />
        <InputDropdown register={register} />
        <Button type='submit' title={"Enviar a Bagaça"} />
      </Form>
      <CardsContainer cards={cards}>
        {cards.length > 0 ? (
          cards.map((card) => (
            <ProfileCard
              CardType='DarkProfileCard'
              address={card.address}
              avatar={card.profilePicture}
              email={card.email}
              name={card.name}
              phone={card.phone}
            />
          ))
        ) : (
          <NotCardsMessage>Nenhum card adicionado</NotCardsMessage>
        )}
      </CardsContainer>
      <Footer />
    </FormsPageContainer>
  );
};

export default FormsPage;
