import { ButtonStyled } from "./styles";

interface IPropsButton {
  title: string;
}

const Button = ({ title }: IPropsButton) => {
  return <ButtonStyled>{title}</ButtonStyled>;
};

export default Button;
