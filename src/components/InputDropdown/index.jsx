import React from "react";
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import styles from "./styles.module.scss";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import data from "../../countries.json";

const InputDropdown = () => {
  return (
    <div>
      <Menu menuButton={<MenuButton className={styles.InputDropdown}>Selecione o pais 🔻</MenuButton>}>
        {data.map((item, index) => (
          <div key={item.id}>
            <MenuItem>
              <img src={item.flag} alt='' width={50} />
              {item.name}
            </MenuItem>
            <MenuDivider />
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default InputDropdown;
