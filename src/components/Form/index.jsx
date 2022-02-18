import React from "react";
import styles from "./styles.module.scss";

export default function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
      {children}
    </form>
  );
}
