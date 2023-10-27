import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Esplora spettacoli illimitati su party Netflix</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Qui puoi avere i migliori spettacoli e film. Quindi, che si
                tratti di un film thriller d&apos;azione o di una commedia
                spassosa, questa estensione ti consente di goderti ogni momento,
                risate ed emozioni come mai prima d&apos;ora. Allora, cosa stai
                aspettando? preparati e pianifica il tuo appuntamento virtuale
                con la persona speciale e crea i tuoi preziosi ricordi con loro.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Benefits;
