import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
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
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Explorez des émissions illimitées sur Netflix Teleparty</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Voulez-vous regarder un film avec des amis ? mais vous ne
                  pouvez pas le faire pour certaines raisons, alors ne vous
                  inquiétez pas. Download Netflix Party extension, vous pouvez
                  avoir votre heure de spectacle préférée avec eux. Vous pouvez
                  aussi sync watch avec Netflix. Si vous avez l&apos;habitude de
                  parler ou de partager vos pensées tout en regardant une
                  émission, alors grâce à ses fonctionnalités incroyables telles
                  que le chat, les appels audio et vidéo, vous pouvez discuter
                  de votre scène préférée. Savez-vous quel est le côté amusant
                  d&apos;utiliser un teleparty netflix? vous pouvez également
                  partager vos expressions via des emojis. Maintenant, vous
                  pouvez aussi regarder netflix a deux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
