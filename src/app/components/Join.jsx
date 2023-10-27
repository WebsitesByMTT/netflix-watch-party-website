import React from "react";
import styles from "../styles/join.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>How this extension works</h2>
        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Install the extension</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Add to your Chrome</p>
                <div
                  className={styles["image-container"]}
                  style={{ marginBottom: "-.6rem" }}
                >
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Activate your valid account</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Create watch Ott party</p>
                <div
                  className={styles["image-container"]}
                  style={{ marginBottom: "-.6rem" }}
                >
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>You will get features like chat, audio, and video call</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>
                  You can share your screen with your friends and watch your
                  favorite content together
                </p>
                <div
                  className={styles["image-container"]}
                  style={{ marginBottom: "-.6rem" }}
                >
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
