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
                <h1>En iyi film gecesini onunla geçirin Netflix party</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Arkanıza yaslanın ve sinema yolculuğunuzda rahatlayın Netlfix
                  Teleparty, En sevdiğiniz şovların keyfini çıkarmak için
                  sevdiklerinizi atıştırmalıklarla da davet edebilirsiniz. Bu
                  uzantıyı kullanarak parti modunuzu da açabilir ve en
                  sevdiğiniz filmi veya programı yayınlarken düşüncelerinizi ve
                  özel anlarınızı paylaşabilirsiniz. En iyi kısmı sahipken
                  watchparty, Hatta sohbet edebilir, sesli ve görüntülü arama
                  yapabilir ve değerli anlarınızı arkadaşlarınız ve ailenizle
                  paylaşabilirsiniz.
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
