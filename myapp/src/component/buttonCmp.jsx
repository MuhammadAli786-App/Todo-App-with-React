import React from "react";
import styles from "./button.module.css";
function ButtonCmp({ text = "Button", onClick, style, }) {
  return (
    <button className={styles.button} style={style}  onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonCmp;
