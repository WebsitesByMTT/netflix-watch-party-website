import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Es una extensión asombrosa con todas las características increíbles.",
  },
  {
    id: 2,
    text: "Es una extensión del navegador donde puedes ver tu contenido favorito con todos tus amigos.",
  },
  {
    id: 3,
    text: "Con esta mejor extensión, ahora puedo compartir mis expresiones mientras veo películas.",
  },
  {
    id: 4,
    text: "¡¡Guau!! Me encantan las fiestas de Netflix, es la mejor manera de disfrutar tus programas.",
  },
  {
    id: 5,
    text: "Ahora puedo ser presentador en Netflix e invitar a tanta gente a ver la serie.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Reseñas</h2>
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
