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
                <h2>Explore programas ilimitados na teleparty da Netflix</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Você quer assistir a um filme junto com os amigos? mas você
                  não pode por alguns motivos, então não se preocupe. Netflix
                  party is now teleparty, esta é a melhor extensão onde você
                  pode ter seu show favorito com eles. Ele também sincroniza a
                  reprodução. Se você tem o hábito de conversar ou compartilhar
                  seus pensamentos enquanto assiste a um programa, então com
                  seus recursos incríveis como chat, áudio e videochamadas você
                  pode discutir sua cena favorita. Você sabe qual é a parte
                  divertida de usar um teleparty netflix? você também pode
                  compartilhar suas expressões por meio de emojis.
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
