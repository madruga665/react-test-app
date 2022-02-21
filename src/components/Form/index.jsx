import React from "react";
import { FormContainer } from "./styles";

export default function Form({ children, handleSubmit, }) {
  return (
    <FormContainer onSubmit={handleSubmit} >
      <h2>Criar novo cartão</h2>
      {children}
    </FormContainer>
  );
}
