import { InputContainer, LabelStyled ,InputStyled } from "./styles";

interface IInputField {
  label: string;
  type: string;
  id: string;
  register: any;
  errors: any;
}

const InputField = ({ label, type, id, register, errors }: IInputField) => {
  return (
    <InputContainer>
      {errors[id] && <span>{errors[id].message}</span>}
      <InputStyled error={errors[id]} placeholder=" " type={type} id={id} {...register(id)} />
      <LabelStyled onError={errors[id]} htmlFor={id}>{label}</LabelStyled>
    </InputContainer>
  );
};

export default InputField;
