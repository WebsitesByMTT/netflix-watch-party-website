import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "C'est une extension étonnante avec toutes les fonctionnalités incroyables.",
  },
  {
    id: 2,
    text: "Netflix Party est une extension de navigateur où vous pouvez regarder votre contenu préféré avec tous vos amis. ",
  },
  {
    id: 3,
    text: "Avec cette meilleure extension, je peux désormais partager mes expressions tout en regardant des films.",
  },
  {
    id: 4,
    text: "Ouah!! J'adore les soirées Netflix, c'est la meilleure façon de profiter de vos émissions.",
  },
  {
    id: 5,
    text: "Désormais, je peux être animateur sur Netflix et inviter un maximum de personnes à regarder la série.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Commentaires</h2>
        <div className={styles.content}>
          {data.map((comment) => (
            <div className={styles.card} key={comment.id}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
