import React from "react";
import styles from "./styles.module.scss";

const InputField = ({ label, type, id, register }) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register(label)} />
    </div>
  );
};

export default InputField;
