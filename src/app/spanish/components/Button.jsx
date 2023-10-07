"use client";
import React from "react";
import styles from "@/app/styles/button.module.scss";

const Button = () => {
  const handleButtonClick = () => {
      const redirectURL = "https://chrome.google.com/webstore/detail/netflix-party/igjdpakigkgjegiiekaabkpagjpaabpc?hl=en&authuser=0";
      window.open(redirectURL, "_blank");
  };
  
  return (
    <button className={styles.btn} onClick={handleButtonClick}>
      Add to Chrome
    </button>
  );
};

export default Button;
