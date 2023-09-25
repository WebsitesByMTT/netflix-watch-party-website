import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>
                Explorez des émissions illimitées sur Netflix party extension
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Ici, vous pouvez avoir les meilleurs spectacles et films. Ainsi,
                qu&apos;il s&apos;agisse d&apos;un thriller d&apos;action ou d&apos;une comédie
                déchirante, cette extension vous permet de profiter de chaque
                instant, de vos rires et de vos émotions comme jamais
                auparavant. Alors qu&apos;est-ce que tu attends? préparez-vous et
                planifiez votre rendez-vous virtuel avec votre partenaire et
                créez vos précieux souvenirs avec lui.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
