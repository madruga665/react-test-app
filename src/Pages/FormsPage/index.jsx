import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import InputDropdown from "../../components/InputDropdown";
import { schema } from "../../validate/schema";
import Button from "../../components/Button";


const FormsPage = () => {
  const { register, handleSubmit, reset, formState:{ errors }  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  return (
    <div className={styles.FormsPageContainer}>
      <h2>Formulário</h2>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <InputField id='name' label='Nome' type='text' register={register} errors={errors} />
        <InputField id='email' label='Email' type='email' register={register} errors={errors} />
        <InputField id='phone' label='Telefone' type='text' register={register} errors={errors} />
        <InputField id='address' label='Endereço' type='text' register={register} errors={errors} />
        <InputDropdown register={register} />
        <Button type='submit' title={"Enviar a Bagaça"}/>
      </Form>
    </div>
  );
};

export default FormsPage;
