import data from "../../countries.json";
import { InputDropdownContainer } from "./styles";

interface IInputDropdown {
  register: any;
}

const InputDropdown = ({ register }: IInputDropdown) => {
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
