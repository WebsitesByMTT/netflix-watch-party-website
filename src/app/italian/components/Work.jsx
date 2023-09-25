import React from "react";
import styles from "@/app/styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">netflix party come funziona</h2>

          <ul className={styles.content}>
            <li>Vai al tuo browser e installa l&apos;estensione</li>
            <li>Dopo averlo installato, puoi aggiungerlo a Chrome</li>
            <li>Quindi, devi attivare il tuo account valido su di esso</li>
            <li>
              Ora puoi creare il collegamento URL e inviarlo ai tuoi amici per
              partecipare alla festa
            </li>
          </ul>

          <p>
            Con le sue incredibili funzionalità come chat, audio e
            videochiamate, puoi interagire con i tuoi amici e familiari durante
            lo spettacolo. Devi solo attivare il tuo account valido sulla
            piattaforma di streaming dove riceverai tutti i contenuti più
            recenti.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
