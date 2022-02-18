import React from "react";
import styles from "./styles.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";


const FormsPage = () => {
  const schema = yup.object().shape({
     name: yup.string().required('Coloca o nome ai mano'),
     email: yup.string().email().required('Deu ruim parsa'),
     phone: yup.number().required(),
     address: yup.string().required()
  });

  const { register, handleSubmit, reset, formState:{errors} } = useForm ({
    resolver: yupResolver(schema) 
  })

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }

  return (
    <div className={styles.FormsPageContainer}>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <p className='error'>
          {errors.name?.message}
        </p>
        <input {...register('email')} />
        <p className='error'>
          {errors.email?.message}
        </p>
        <input {...register('phone')} />
        <input {...register('address')} />
        <button type='submit'>Enviar a Bagaça</button>
      </form>
    </div>
  );
};

export default FormsPage;
