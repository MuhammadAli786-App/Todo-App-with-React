import React from "react";
import styles from "./button.module.css";

function ButtonCmp({ text = "Button", onClick, style, variant = "primary", ...rest }) {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      {...rest}
      type="button"
      className={`${styles.button} ${variantClass}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonCmp;
