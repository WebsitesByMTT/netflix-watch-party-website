import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "É uma extensão incrível com todos os recursos incríveis.",
  },
  {
    id: 2,
    text: "Netflix Party é uma extensão do navegador onde você pode assistir ao seu conteúdo mais querido com todos os seus amigos.    ",
  },
  {
    id: 3,
    text: "Com esta melhor extensão, agora posso compartilhar minhas expressões enquanto assisto filmes.",
  },
  {
    id: 4,
    text: "Uau!! Eu adoro as festas da Netflix, é a melhor maneira de curtir seus programas.",
  },
  {
    id: 5,
    text: "Agora posso ser apresentador da Netflix e convidar o máximo de pessoas para assistir a série.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Avaliações</h2>
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
