"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Como enviar convites para seus amigos e familiares?",
    ans: "Primeiro, instale a extensão e ative sua conta válida nela. Depois, você pode criar um link de URL e enviá-lo para seus amigos e familiares. Ao clicar no link, eles podem entrar na festa.",
  },
  {
    id: 2,
    ques: "A festa netflix tem festa para assistir?",
    ans: "Sim, a Netflix oferece uma festa de exibição onde você pode transmitir com sua família e amigos.",
  },
  {
    id: 3,
    ques: "Como assistir a um festa netflix?",
    ans: "É a melhor extensão de navegador porque sincroniza a reprodução e permite que você se divirta de verdade.",
  },
  {
    id: 4,
    ques: "Você pode compartilhar sua tela em festa netflix?",
    ans: "Sim, você pode compartilhar sua tela com seus entes queridos no Netflix.",
  },
  {
    id: 5,
    ques: "Como assistir seus programas favoritos no netflix party extension?",
    ans: "Sobre Netflix teleparty, você pode assistir a todos os programas e filmes mais recentes com seus amigos e familiares. Você só precisa ter uma conta válida e uma assinatura.",
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
