"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to watch netflix together?",
    ans: " Use the browser extension, which synchronizes playback and allows real-time chatting with friends. You can also enjoy screen share with your friends. ",
  },
  {
    id: 2,
    ques: "How to watch a movie with friends online? ",
    ans: "To watch a movie with friends online, use the extension, where you can create a virtual room and chat while enjoying the movie together in real time. Alternatively, you can also do video or audio calls to start the movie simultaneously and share reactions and comments. In comparison to teleparty extension, this extension has incredible features.",
  },
  {
    id: 3,
    ques: "How to screen share netflix? ",
    ans: "It is a very simple and quick process, by installing the extension on your browser, you can share a URL link with your loved ones and enjoy share play.",
  },
  {
    id: 4,
    ques: "Can you screen share netflix?",
    ans: " You can not directly share your screen on it, but by installing our third-party extension you can share your screen on it and enjoy movies and series.     ",
  },
  {
    id: 5,
    ques: "How does netflix watch party work?    ",
    ans: "This extension is a third-party browser extension, that synchronizes movie or TV show playback among multiple viewers, enabling real-time chat and calls for an immersive and shared streaming experience.",
  },
  {
    id: 6,
    ques: "Does Netflix shave watch party?",
    ans: "Yes, it has a watch party where you can enjoy unlimited movies and series. ",
  },
  {
    id: 7,
    ques: "How to do a watch party on netflix? ",
    ans: "To host a party, install a browser extension, then start a movie or show and invite friends via a unique URL to watch together in sync and chat in real-time.",
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
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="/addLogo.svg"
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
