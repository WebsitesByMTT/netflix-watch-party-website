import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Tüm inanılmaz özelliklere sahip inanılmaz bir eklentidir.",
  },
  {
    id: 2,
    text: "Netflix Party yapabileceğiniz bir tarayıcı uzantısıdır. netflix birlikte izleme tüm arkadaşlarınızla.",
  },
  {
    id: 3,
    text: "Bu en iyi eklentiyle artık film izlerken ifadelerimi paylaşabiliyorum.",
  },
  {
    id: 4,
    text: "Vay!! Netflix partilerini seviyorum, programlarınızın keyfini çıkarmanın en iyi yolu bu.",
  },
  {
    id: 5,
    text: "Artık Netflix'te sunucu olabilirim ve mümkün olduğu kadar çok kişiyi diziyi izlemeye davet edebilirim.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Yorumlar</h2>
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
