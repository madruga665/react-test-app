import React from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import styles from "./styles.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import InputDropdown from "../../components/InputDropdown";


const FormsPage = () => {
  const schema = yup.object({
  name: yup.string().required('Sem o nome não da parça'),
  email: yup.string().email().required('Mano coloca o email ai'),
  phone: yup.string().required('Cara eu juro não não vou te chamar no zap'),
  address: yup.string().required('ta com vergonha de onde vc mora?'),
}).required();

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
        <InputDropdown />
        <button type='submit'>Enviar a Bagaça</button>
      </Form>
    </div>
  );
};

export default FormsPage;
