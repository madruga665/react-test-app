import React from "react";
import { FormContainer } from "./styles";

export default function Form({ children, handleSubmit, }) {
  return (
    <FormContainer onSubmit={handleSubmit} >
      {children}
    </FormContainer>
  );
}
