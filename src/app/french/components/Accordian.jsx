"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "./Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Comment envoyer une invitation à vos amis et à votre famille ?",
    ans: "Tout d’abord, installez l’extension et activez votre compte valide dessus. Ensuite, vous pouvez créer un lien URL et l'envoyer à vos amis et à votre famille. Lorsqu'ils cliquent sur le lien, ils peuvent rejoindre la fête.",
  },
  {
    id: 2,
    ques: "Netflix organise-t-il une soirée de visionnage ?",
    ans: "Oui, Netflix organise une soirée de visionnage où vous pouvez diffuser netflix beraber izleme avec votre famille et vos amis.",
  },
  {
    id: 3,
    ques: "Comment regarder une soirée Netflix ?",
    ans: "C'est la meilleure extension de navigateur car elle synchronise la lecture et permet de s'amuser en vrai.",
  },
  {
    id: 4,
    ques: "Pouvez-vous partager votre écran sur Netflix ?",
    ans: "Oui, vous pouvez partager votre écran avec vos proches sur Netflix.",
  },
  {
    id: 5,
    ques: "Comment regarder vos émissions préférées sur Netflix ?",
    ans: "Sur Netflix Teleparty, vous pouvez regarder toutes les dernières émissions et films avec vos amis et votre famille. Il vous suffit d’avoir un compte valide et un abonnement.",
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
