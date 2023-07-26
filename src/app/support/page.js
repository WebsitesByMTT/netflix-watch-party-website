"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/support.module.scss";

const Support = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5xn1ra",
        "template_vdzh5g6",
        e.target,
        "leHavwFtDDb_5X96s"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.item}>
            <label htmlFor="name">Enter your name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your name"
              name="email"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="10"
              name="message"
              placeholder="Enter your message....."
              required
            ></textarea>
          </div>
          <div className={styles.item}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
