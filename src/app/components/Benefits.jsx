import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Experience the unlimited streaming party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Enjoy your favorite shows and movies from popular streaming
                websites as you gather for an exciting online streaming party.
              </p>
              <p>
                Share the joy of watching movies,for seamless entertainment with
                your friends and family. Whether it’s action-packed thrillers,
                heartwarming dramas, or side-splitting comedies, this extension
                lets you revel in shared moments, laughter, and emotions like
                never before.
              </p>
              <p>
                So, get ready to experience the magic of online streaming! Set
                up your virtual cinema and embark on an unforgettable journey
                with browser.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="/benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
