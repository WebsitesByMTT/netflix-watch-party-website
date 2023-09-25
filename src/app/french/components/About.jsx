import React from "react";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>À propos de nous</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Netflix Teleparty est une extension de navigateur qui vous
                permet d'avoir un nombre illimité d'émissions, de séries et de
                films. Vous pouvez regarder tous les derniers contenus avec vos
                amis, peu importe où ils se trouvent et à quelle distance ils se
                trouvent. Vous pouvez toujours profiter de votre showtime avec
                eux. Il possède des fonctionnalités étonnantes, notamment le
                chat, les appels audio et vidéo. Avec ceux-ci, vous pouvez
                partager vos réflexions tout en regardant vos films et émissions
                préférés. C'est juste pour utiliser cette extension, vous devez
                avoir un compte valide et installer l'extension du navigateur.
                Après cela, vous pouvez créer un lien URL et organiser la fête.
                Une fois que tout le monde est connecté, la lecture sera
                automatiquement synchronisée. Cela signifie que tout le monde
                peut voir le même contenu au moment précis, vous aurez
                l'impression que vous le regardez tous ensemble dans une seule
                pièce. C'est la meilleure façon d'avoir votre showtime préféré.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
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

export default About;
