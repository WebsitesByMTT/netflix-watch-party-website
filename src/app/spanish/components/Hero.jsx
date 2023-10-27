"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "@/app/components/Button";

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
                <h1>Pasa la mejor noche de cine con un Netflix party</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Siéntate y relájate en tu viaje cinematográfico con Netflix
                  party extention, donde también podrás invitar a tus seres
                  queridos con algunos snacks para disfrutar de tus programas
                  favoritos. Al usar esta extensión, también puedes activar el
                  modo fiesta y compartir tus pensamientos y momentos especiales
                  mientras transmites tu película o programa favorito. La mejor
                  parte es que mientras tomas un watch party netflix, incluso
                  puedes chatear, realizar llamadas de audio y video y compartir
                  tus preciosos momentos con tus amigos y familiares.
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
