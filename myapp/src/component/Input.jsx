import React from "react";
import styles from "./input.module.css";

function Input({ placeholder, onChange, value, ...rest }) {
  return (
    <input
      {...rest}
      className={styles.inputField}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
