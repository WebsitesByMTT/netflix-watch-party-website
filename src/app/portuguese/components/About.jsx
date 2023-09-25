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
              <h2>Sobre nós</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Netflix teleparty é uma extensão do navegador que permite que
                você tenha programas, séries e filmes ilimitados. Você pode
                assistir a todo o conteúdo mais recente com seus amigos, não
                importa onde eles estejam e a que distância estejam. Você ainda
                pode aproveitar seu show com eles. Possui alguns recursos
                incríveis, incluindo chat, chamadas de áudio e vídeo. Com eles,
                você pode compartilhar seus pensamentos enquanto assiste aos
                seus filmes e programas favoritos. Basta usar esta extensão,
                você deve ter uma conta válida e instalar a extensão do
                navegador. Depois disso, você pode criar um link de URL e
                organizar a festa. Assim que todos estiverem conectados, a
                reprodução será sincronizada automaticamente. Isso significa que
                todos podem ver o mesmo conteúdo no momento exato, será como se
                todos estivessem assistindo juntos em uma sala. É a melhor
                maneira de ter seu horário de show favorito.
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
