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
              <h2>Chi siamo</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Netflix teleparty è un'estensione del browser che ti consente di
                avere programmi, serie e film illimitati. Puoi watch2gether
                tutti gli ultimi contenuti con i tuoi amici, non importa dove
                sono e quanto sono lontani. Puoi comunque goderti il ​​tuo
                spettacolo con loro. Ha alcune funzionalità straordinarie tra
                cui chat, audio e videochiamate. Con questi, puoi condividere i
                tuoi pensieri mentre guardi i tuoi film e programmi preferiti. È
                solo per utilizzare questa estensione, devi avere un account
                valido e installare l'estensione del browser. Successivamente,
                puoi creare un collegamento URL e ospitare la festa. Una volta
                che tutti sono connessi, sincronizzerà automaticamente la
                riproduzione. Ciò significa che tutti possono vedere lo stesso
                contenuto nello stesso momento, ti sembrerà di guardarlo tutti
                insieme in una stanza. È il modo migliore per avere il tuo
                programma preferito.
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
