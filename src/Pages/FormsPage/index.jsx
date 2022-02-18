import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";

const FormsPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.FormsPageContainer}>
      FormsPage
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <InputField id='name' label='Name' type='text' register={register} />
        <InputField id='email' label='Email' type='email' register={register} />
        <InputField id='phone' label='Phone' type='text' register={register} />
        <InputField id='address' label='Address' type='text' register={register} />
        <button type='submit'>Enviar a Bagaça</button>
      </Form>
    </div>
  );
};

export default FormsPage;
