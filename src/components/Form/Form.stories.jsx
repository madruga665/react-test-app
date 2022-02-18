import React from "react";
import { useForm } from "react-hook-form";

import Form from "./index";
import { InputAdress, InputEmail, InputName, InputPhone } from "../InputField/InputField.stories";

export default {
  title: "Forms/Form1",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      {args.children}
    </Form>
  );
};

export const Form1 = Template.bind({});

Form1.args = {
  children: (
    <>
      <InputName />
      <InputEmail />
      <InputPhone />
      <InputAdress />
    </>
  ),
};
