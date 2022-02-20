import React from "react";
import data from "../../countries.json";

const InputDropdown = ({ register }) => {
  return (
    <div>
      <select {...register("país")}>
        {data.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
