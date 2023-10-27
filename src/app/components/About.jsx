import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About</h2>
            </div>
            <div className={styles.desc}>
              <p>
                It is a browser extension, that allows you to enjoy unlimited
                streaming with your friends and family. It does not matter that
                you are far away from them, you can watch series together in
                your party mode. With its incredible features like chatting,
                audio calls, and video calls, you can watch your favorite
                content while chatting or calling your friends.
              </p>
              <p>
                To use the extension, you must have a valid account and install
                the browser extension. After installation, the extension creates
                a special web address (URL) that the host can share with their
                friends or family. This URL allows others to join the watch
                party. Once everyone is connected, the host can begin playing
                the movie or TV show. The magic of the extension lies in
                synchronizing all participants&apos; screens. This means that
                everyone sees the same content at the exact same time, making it
                feel like you&apos;re all watching together in one room. It&apos;s a great
                way to enjoy movies or shows with your loved ones, even when
                you&apos;re physically apart.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
