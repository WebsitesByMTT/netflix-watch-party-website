import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Esplora programmi illimitati sul teleparty Netflix</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Vuoi guardare un film insieme agli amici? ma non puoi per
                  alcuni motivi, quindi non preoccuparti. Download Netflix Party
                  extension, puoi avere il tuo spettacolo preferito con loro.
                  Puoi anche sync watch con Netflix. Se hai l&apos;abitudine di
                  parlare o condividere i tuoi pensieri mentre guardi uno
                  spettacolo, con le sue incredibili funzionalità come chat,
                  audio e videochiamate puoi discutere della tua scena
                  preferita. Sai qual è la parte divertente dell&apos;utilizzo di a
                  teleparty netflix? puoi anche condividere le tue espressioni
                  tramite emoji. Ora puoi anche tu regarder netflix a deux.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
