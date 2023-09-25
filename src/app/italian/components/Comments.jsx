import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "È un'estensione straordinaria con tutte le funzionalità incredibili.",
  },
  {
    id: 2,
    text: "festa netflix è un'estensione del browser con cui puoi guardare i tuoi contenuti più amati con tutti i tuoi amici.",
  },
  {
    id: 3,
    text: "Con questa migliore estensione, ora posso condividere le mie espressioni mentre guardo i film.",
  },
  {
    id: 4,
    text: "Oh!! Adoro le feste Netflix, è il modo migliore per goderti i tuoi spettacoli.",
  },
  {
    id: 5,
    text: "Ora posso essere un host su Netflix e invitare quante più persone a guardare la serie.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Recensioni</h2>
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
