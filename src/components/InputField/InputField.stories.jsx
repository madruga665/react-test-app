import React from "react";

import InputField from "./index";

export default {
  title: "Forms/InputField",
  component: InputField,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <InputField {...args} />;

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



