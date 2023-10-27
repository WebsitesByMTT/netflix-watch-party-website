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
                <h2>
                  Explora programas ilimitados en la telefiesta de Netflix
                </h2>
              </div>
              <div className={styles.desc}>
                <p>
                  ¿Quieres ver una película junto con amigos? pero no puedes por
                  algunas razones, así que no te preocupes. Descarga la
                  extensión, podrás tener tu programa favorito con ellos.
                  También puedes sincronizar tu reloj con Netflix. Si tienes la
                  costumbre de hablar o compartir tus pensamientos mientras
                  miras un programa, con sus increíbles funciones como chat,
                  audio y videollamadas podrás discutir tu escena favorita.
                  ¿Sabes cuál es la parte divertida de usar una teleparty de
                  Netflix? También puedes compartir tus expresiones a través de
                  emojis.
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
