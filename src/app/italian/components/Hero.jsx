"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgClass(styles["hero-mobile"]);
      } else {
        setBgClass(styles["hero-large"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${styles.hero} ${bgClass}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>
                  Trascorri la migliore serata al cinema con a Netflix party
                </h1>
              </div>
              <div className={styles.text}>
                <p>
                  Siediti e rilassati nel tuo viaggio cinematografico con
                  Netflix party estensione, dove potrai anche invitare i tuoi
                  cari con qualche snack a goderti i tuoi programmi preferiti.
                  Utilizzando questa estensione puoi anche attivare la modalità
                  party e condividere i tuoi pensieri e momenti speciali durante
                  lo streaming del tuo film o programma preferito. La parte
                  migliore è avere a netflix watch party, puoi persino chattare,
                  effettuare chiamate audio e video e condividere i tuoi momenti
                  preziosi con i tuoi amici e familiari.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
