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
              <h2>Explora programas ilimitados en party Netflix</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Aquí podrás tener los mejores programas y películas. Entonces,
                ya sea una película de suspenso de acción o una comedia
                desgarradora, esta extensión te permite disfrutar de cada
                momento, risas y emociones como nunca antes. ¿Entonces, Qué
                esperas? prepárate y planifica tu cita virtual con tu persona
                especial y crea tus preciados recuerdos con ella.
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
