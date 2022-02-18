import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { useForm } from "react-hook-form";

// const schema = yup.object({
//   name: yup.string().required('Coloca o nome ai mano'),
//   email: yup.string().email().required('Deu ruim parsa'),
// }).required();

const FormsPage = () => {
  const { register, handleSubmit, reset, formState:{ errors }  } = useForm({
    // resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors)
    reset()
  }
  return (
    <div className={styles.FormsPageContainer}>
      <h2>Formulário</h2>
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <InputField id='name' label='Name' type='text' register={register} />
        <p>{errors.name?.message}</p>
        <InputField id='email' label='Email' type='email' register={register} />
        <InputField id='phone' label='Phone' type='text' register={register} />
        <InputField id='address' label='Address' type='text' register={register} />
        <button type='submit'>Enviar a Bagaça</button>
      </Form>
    </div>
  );
};

export default FormsPage;
