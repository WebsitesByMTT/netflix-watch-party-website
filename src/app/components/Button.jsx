import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/netflix-party/igjdpakigkgjegiiekaabkpagjpaabpc?hl=en&authuser=0"
      target="_blank"
    >
      <button className={styles.btn}>Add to Chrome</button>
    </a>
  );
};

export default Button;
