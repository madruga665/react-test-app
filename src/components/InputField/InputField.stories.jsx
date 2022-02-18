import React from "react";
import { useForm } from "react-hook-form";

import InputField from "./index";

export default {
  title: "Inputs/InputField",
  component: InputField,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  const { register } = useForm();
  return <InputField {...args} register={register} />;
};

export const InputName = Template.bind({});
export const InputEmail = Template.bind({});
export const InputPhone = Template.bind({});
export const InputAdress = Template.bind({});

InputName.args = {
  label: "Name",
  type: "text",
  id: "name",
};

InputEmail.args = {
  label: "Email",
  type: "email",
  id: "email",
};

InputPhone.args = {
  label: "Phone",
  type: "text",
  id: "phone",
};

InputAdress.args = {
  label: "Address",
  type: "text",
  id: "address",
};
