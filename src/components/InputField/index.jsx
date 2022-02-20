import React from "react";
import { InputContainer } from "./styles.js";

const InputField = ({ label, type, id, register, errors }) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register(id)} />
      {errors[id] && <span>{errors[id].message}</span>}
    </InputContainer>
  );
};

export default InputField;
