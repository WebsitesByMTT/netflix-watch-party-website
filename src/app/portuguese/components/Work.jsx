import React from "react";
import styles from "@/app/styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">Como usar Netflix party</h2>

          <ul className={styles.content}>
            <li>Vá para o seu navegador e instale a extensão</li>
            <li>Depois de instalá-lo, você pode adicioná-lo ao Chrome</li>
            <li>Então, você precisa ativar sua conta válida nele</li>
            <li>
              Agora você pode criar o link da URL e enviá-lo aos seus amigos
              para participarem da festa
            </li>
          </ul>

          <p>
            Com seus recursos incríveis como chat, chamadas de áudio e vídeo,
            você pode interagir com seus amigos e familiares enquanto assiste ao
            show. Basta ativar sua conta válida na plataforma de streaming, onde
            você obterá todo o conteúdo mais recente.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
