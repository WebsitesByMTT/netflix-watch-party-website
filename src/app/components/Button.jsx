"use client";
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  const handleButtonClick = () => {
      const redirectURL = "https://chrome.google.com/webstore/detail/watchottparty/akbbdmilignoplkhminiaecccigmpdmo?hl=en-US";
      window.open(redirectURL, "_blank");
  };
  
  return (
    <button className={styles.btn} onClick={handleButtonClick}>
      Add to Chrome
    </button>
  );
};

export default Button;
