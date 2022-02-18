import React from "react";

import ProfileCard from "./index";

export default {
  title: "Cards/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ProfileCard {...args} />;

export const DarkProfileCard = Template.bind({});
DarkProfileCard.args = {
  avatar: "https://github.com/madruga665.png",
  name: "Madruga",
  phone: "(13) 98179-7296",
  email: "madruga665@hotmail.com",
  address: "Rua Quinze, nº 406, Vila Zilda, Guarujá - SP",
  CardType: "DarkProfileCard",
};

export const LightProfileCard = Template.bind({});
LightProfileCard.args = {
  avatar: "https://github.com/madruga665.png",
  name: "Madruga",
  phone: "(13) 98179-7296",
  email: "madruga665@hotmail.com",
  address: "Rua Quinze, nº 406, Vila Zilda, Guarujá - SP",
  CardType: "LightProfileCard",
}