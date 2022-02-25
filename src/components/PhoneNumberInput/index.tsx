import { NumberFormatStyled, LabelStyled, InputContainer } from "./styles";

interface IPhoneNumberInput {
  format: string;
  mask: string;
  label: string;
  id: string;
}

const PhoneNumberInput = ({ format, mask, label, id,}: IPhoneNumberInput) => {
  return (
    <InputContainer>
      <NumberFormatStyled placeholder=' ' format={format} mask={mask} id={id} name={id}  />
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
    </InputContainer>
  );
};

export default PhoneNumberInput;
