import React from "react";
import { InputContainer, LabelStyled ,InputStyled } from "./styles.js";

const InputField = ({ label, type, id, register, errors }) => {
  return (
    <InputContainer>
      <InputStyled placeholder=" " type={type} id={id} {...register(id)} />
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      {errors[id] && <span>{errors[id].message}</span>}
    </InputContainer>
  );
};

export default InputField;
