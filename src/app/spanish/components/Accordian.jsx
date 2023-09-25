"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "¿Cómo enviar invitaciones a tus amigos y familiares?",
    ans: "Primero, instale la extensión y active su cuenta válida en ella. Luego puedes crear un enlace URL y enviárselo a tus amigos y familiares. Cuando hacen clic en el enlace pueden unirse a la fiesta.",
  },
  {
    id: 2,
    ques: "¿Netflix tiene una fiesta de visualización?",
    ans: "Sí, Netflix tiene una fiesta de visualización donde puedes transmitir con tu familia y amigos.",
  },
  {
    id: 3,
    ques: "¿Cómo ver Netflix juntos?",
    ans: "Es la mejor extensión del navegador porque sincroniza la reproducción y te permite divertirte en realidad.",
  },
  {
    id: 4,
    ques: "¿Puedes compartir tu pantalla en Netflix?",
    ans: "Sí, puedes compartir tu pantalla con tus seres queridos en Netflix.",
  },
  {
    id: 5,
    ques: "¿Cómo ver tus programas favoritos en Netflix?",
    ans: "En Netflix teleparty, Puedes ver los últimos programas y películas con tus amigos y familiares. Sólo necesitas tener una cuenta válida y una suscripción.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FAQ</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./addLogo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
