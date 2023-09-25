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
                <h1>Passez la meilleure soirée cinéma avec un Netflix party</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Asseyez-vous et détendez-vous pendant votre voyage
                  cinématographique avec Netlfix Teleparty, où vous pourrez
                  également inviter vos proches avec quelques collations pour
                  profiter de vos émissions préférées. En utilisant cette
                  extension, vous pouvez également activer votre mode fête et
                  partager vos pensées et vos moments spéciaux tout en diffusant
                  votre film ou émission préféré. Le meilleur, c&apos;est d&apos;avoir un
                  watch party netlfix, vous pouvez même discuter, passer des
                  appels audio et vidéo et partager vos précieux moments avec
                  vos amis et votre famille.
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
