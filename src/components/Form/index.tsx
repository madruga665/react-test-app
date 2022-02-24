import { FormContainer } from "./styles";

interface IFormProps {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, handleSubmit, }: IFormProps) {
  return (
    <FormContainer onSubmit={handleSubmit} >
      <h2>Criar novo card</h2>
      {children}
    </FormContainer>
  );
}
