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
              <h2>Explore programas ilimitados em Netflix party extensão</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Aqui você pode ter os melhores shows e filmes. Portanto, seja um
                filme de ação e suspense ou uma comédia emocionante, esta
                extensão permite que você aproveite cada momento, risadas e
                emoções como nunca antes. Então, o que você está esperando?
                prepare-se e planeje seu encontro virtual com aquele especial e
                crie suas memórias preciosas com eles.
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
