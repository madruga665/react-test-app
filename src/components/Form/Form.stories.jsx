import React from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";

import Form from "./index";

export default {
  title: "Forms/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
};
const { handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);

const Template = (args) => <Form {...args}>{args.children}</Form>;

export const Form1 = Template.bind({});

Form1.args = {
  handleSubmit: handleSubmit(onSubmit),
  children: (
    <>
    <InputField label="Name" type="text" id="name" />
    <InputField label="Email" type="email" id="email" />
    <InputField label="Phone" type="text" id="phone" />
    <InputField label="Address" type="text" id="address" />
    </>
  ),
}

