"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Come inviare inviti ai tuoi amici e familiari?",
    ans: "Innanzitutto, installa l'estensione e attiva il tuo account valido su di essa. Quindi puoi creare un collegamento URL e inviarlo ai tuoi amici e familiari. Quando fanno clic sul collegamento possono unirsi al gruppo.",
  },
  {
    id: 2,
    ques: "Netflix organizza un watch party?",
    ans: "Sì, Netflix organizza un watch party in cui puoi trasmettere in streaming netflix beraber izleme con la tua famiglia e i tuoi amici.",
  },
  {
    id: 3,
    ques: "come vedere netflix insieme?",
    ans: "È la migliore estensione del browser perché sincronizza la riproduzione e ti permette di divertirti dal vivo.",
  },
  {
    id: 4,
    ques: "Puoi condividere il tuo schermo su Netflix?",
    ans: "Sì, puoi condividere il tuo schermo con i tuoi cari su Netflix.",
  },
  {
    id: 5,
    ques: "Come guardare i tuoi programmi preferiti su Netflix?",
    ans: "SU Netflix teleparty, puoi guardare tutti gli ultimi spettacoli e film con i tuoi amici e familiari. È solo necessario avere un account valido e un abbonamento.",
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
