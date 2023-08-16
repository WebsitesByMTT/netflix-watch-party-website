"use client";
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  const handleClick = () => {
    window.open("/");
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      Add to Chrome
    </button>
  );
};

export default Button;
