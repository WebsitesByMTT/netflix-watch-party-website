"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
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
                <h1>Discover movie night with Netflix watch party</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Stream and relax on a cinematic journey with a Netflix
                  streaming party and gather your loved ones with some popcorn,
                  and enjoy the entertainment.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["virtual-party"]}>
        <div className={styles.container}>
          <p>
            With this extension switch on your party mode and share laughs and
            heartfelt moments as you sync your screens for a fun binge-watch and
            chill time where distance doesn’t matter.
          </p>
          <p>
            So, whether it is a thrilling adventure, a heartwarming romance, or
            a laugh-out-loud comedy, it brings you closer together in the
            comfort of your own homes. Create your fun memories, bond like never
            before and let the magic of cinema unite your hearts with this
            viewing party.
          </p>
          <p>
            With this extension, you can watch Netflix together, and chat, and
            the best part is that you can also audio or video call your friends.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
