import React from "react";
import styles from "./styles.module.scss";

const InputField = ({ label, type, id, register, errors }) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register(id)} />
      {errors[id] && <span>{errors[id].message}</span>}
    </div>
  );
};

export default InputField;
