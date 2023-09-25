import React from "react";
import styles from "@/app/styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">Comment rejoindre le Netflix teleparty</h2>

          <ul className={styles.content}>
            <li>Accédez à votre navigateur et installez l&apos;extension</li>
            <li>Après l&apos;avoir installé, vous pouvez l&apos;ajouter à Chrome</li>
            <li>Ensuite, vous devez activer votre compte valide dessus</li>
            <li>
              Vous pouvez maintenant créer le lien URL et l&apos;envoyer à vos amis
              pour qu&apos;ils rejoignent la fête.
            </li>
          </ul>

          <p>
            Avec ses fonctionnalités incroyables telles que le chat, les appels
            audio et vidéo, vous pouvez interagir avec vos amis et votre famille
            tout en profitant de votre showtime. Il vous suffit d&apos;activer votre
            compte valide sur la plateforme de streaming où vous obtiendrez tous
            les derniers contenus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
