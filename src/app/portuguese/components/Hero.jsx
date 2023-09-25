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
                <h1>Tenha a melhor noite de cinema com uma Netflix party</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Sente-se e relaxe em sua jornada cinematográfica com Netlfix
                  Teleparty, onde você também pode convidar seus entes queridos
                  com alguns petiscos para curtir seus programas favoritos. Ao
                  usar esta extensão, você também pode ativar o modo festa e
                  compartilhar seus pensamentos e momentos especiais enquanto
                  transmite seu filme ou programa favorito. A melhor parte é ter
                  um watch party netlfix, você pode até conversar, fazer
                  chamadas de áudio e vídeo e compartilhar seus momentos
                  preciosos com seus amigos e familiares.
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
