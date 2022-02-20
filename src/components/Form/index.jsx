import React from "react";
import styles from "./styles.module.scss";

export default function Form({ children, handleSubmit, }) {
  return (
    <form onSubmit={handleSubmit} className={styles.FormContainer}>
      {children}
    </form>
  );
}
