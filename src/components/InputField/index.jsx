import React from "react";
import { InputContainer, LabelStyled ,InputStyled } from "./styles.js";

const InputField = ({ label, type, id, register, errors }) => {
  return (
    <InputContainer>
      {errors[id] && <span>{errors[id].message}</span>}
      <InputStyled error={errors[id]} placeholder=" " type={type} id={id} {...register(id)} />
      <LabelStyled error={errors[id]} htmlFor={id}>{label}</LabelStyled>
    </InputContainer>
  );
};

export default InputField;
