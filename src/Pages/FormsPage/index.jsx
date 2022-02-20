import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import InputDropdown from "../../components/InputDropdown";
import { schema } from "../../validate/schema";


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
        <InputField id='name' label='Name' type='text' register={register} errors={errors} />
        <InputField id='email' label='Email' type='email' register={register} errors={errors} />
        <InputField id='phone' label='Phone' type='text' register={register} errors={errors} />
        <InputField id='address' label='Address' type='text' register={register} errors={errors} />
        <InputDropdown register={register} />
        <button type='submit'>Enviar a Bagaça</button>
      </Form>
    </div>
  );
};

export default FormsPage;
