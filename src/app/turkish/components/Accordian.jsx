"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "netflix party nasıl yapılır ",
    ans: " Öncelikle uzantıyı tarayıcınıza yükleyin ve geçerli hesabınızı etkinleştirin. Daha sonra bir URL bağlantısı oluşturabilir ve bunu arkadaşlarınıza ve ailenize gönderebilirsiniz. Bağlantıya tıkladıklarında partiye katılabilirler.",
  },
  {
    id: 2,
    ques: "Netflix'te izleme partisi var mı?",
    ans: "Evet, Netflix'te yayın izleyebileceğiniz bir izleme partisi var netflix beraber izleme aileniz ve arkadaşlarınızla.",
  },
  {
    id: 3,
    ques: "Netflix partisi nasıl izlenir?",
    ans: "En iyi tarayıcı uzantısıdır çünkü oynatmayı senkronize eder ve gerçekte eğlenmenizi sağlar.",
  },
  {
    id: 4,
    ques: "Ekranınızı Netflix'te paylaşabilir misiniz?",
    ans: "Evet, Netflix'te ekranınızı sevdiklerinizle paylaşabilirsiniz.",
  },
  {
    id: 5,
    ques: "Netflix'te en sevdiğiniz programları nasıl izleyebilirsiniz?",
    ans: "Açık Netflix teleparty, Arkadaşlarınız ve ailenizle en yeni şovları ve filmleri izleyebilirsiniz. Sadece geçerli bir hesaba ve aboneliğe sahip olmanız yeterli.",
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
