import React from "react";
import data from "../../countries.json";
import { InputDropdownContainer } from "./styles";

const InputDropdown = ({ register }) => {
  return (
    <InputDropdownContainer>
      <select {...register("país")}>
        {data.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </InputDropdownContainer>
  );
};

export default InputDropdown;
