import React from "react";
import { NumberFormatStyled, LabelStyled, InputContainer } from "./styles";

const PhoneNumberInput = ({ format, mask, label, id,}) => {
  return (
    <InputContainer>
      <NumberFormatStyled placeholder=' ' format={format} mask={mask} id={id} name={id}  />
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
    </InputContainer>
  );
};

export default PhoneNumberInput;
