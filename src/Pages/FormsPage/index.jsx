import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import InputDropdown from "../../components/InputDropdown";
import { schema } from "../../validate/schema";
import Button from "../../components/Button";
import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import Header from "../../components/Header";


const FormsPage = () => {
  const [cards, setCards] = useState([])
  const { register, handleSubmit, reset, formState:{ errors }  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    setCards([...cards, data])
    reset()
  }
  return (
    <div className={styles.FormsPageContainer}>
      <Header title='Cartões' link1='/' linkTitle1='Home' link2='/cards' linkTitle2='Cartões' />
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <InputField id='name' label='Nome' type='text' register={register} errors={errors} />
        <InputField id='email' label='Email' type='email' register={register} errors={errors} />
        <InputField id='phone' label='Telefone' type='text' register={register} errors={errors} />
        <InputField id='profilePicture' label='Foto de Perfil' type='text' register={register} errors={errors} />
        <InputField id='address' label='Endereço' type='text' register={register} errors={errors} />
        <InputDropdown register={register} />
        <Button type='submit' title={"Enviar a Bagaça"}/>
      </Form>
      <section className={styles.CardsContainer}>
        {cards.map((card) => (
        <ProfileCard
        CardType='DarkProfileCard'
        address={card.address}
        avatar={card.profilePicture}
        email={card.email}
        name={card.name}
        phone={card.phone}
      />
        ))}
      </section>
    </div>
  );
};

export default FormsPage;
