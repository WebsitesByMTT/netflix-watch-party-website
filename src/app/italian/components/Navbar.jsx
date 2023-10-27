"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/header.module.scss";
import Button from "@/app/components/Button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <div className={styles["image-container"]}>
                <Image
                  src="/main-logo.svg"
                  alt="ott-party"
                  fill={true}
                  className={styles["image"]}
                />
              </div>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">Netflix watch party</Link>
          </li>
          <li className={styles.link}>
            <Link href="#features">Features</Link>
          </li>
          <li className={styles.link}>
            <Link href="#how-it-works">How It Works</Link>
          </li>
          <li className={styles.link}>
            <Link href="/support">Support</Link>
          </li>
        </ul>
        <span className={styles.hideBtn}>
          <Button />
        </span>        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <Link href="/">
            <div className={styles["image-container"]}>
              <Image
                src="/logo.svg"
                alt="ott-party"
                fill={true}
                className={styles["image"]}
              />
            </div>
          </Link>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">Netflix watch party</Link>
            </li>
            <li className={styles.link}>
              <Link href="#features">Features</Link>
            </li>
            <li className={styles.link}>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li className={styles.link}>
              <Link href="/support">Support</Link>
            </li>
          </ul>
          <Button />
        </div>
      )}
    </>
  );
};

export default Navbar;
