import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>HD Time synced with Netflix watch party</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  If you love to watch a movie or series with your squad, you
                  just need to log in at the same time and invite friends on
                  Netflix. You can also do audio and video calls while watching
                  the shows and will get the advantage of fast buffering and HD
                  video quality on your browser. This extension has the best
                  features as compared to teleparty extension.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Personalize your own watch ottparty</h2>
            </div>
            <div className={styles.desc}>
              <p>
                When you choose the creative user icon, you unlock the best
                features like chat, audio calls, and video calls. Create your
                dream movie night with friends and family by selecting your
                favorite content from top online streaming platforms. You can
                enjoy high-quality streaming that&apos;s perfectly synced for
                everyone, allowing you all to cheer and have fun together.
              </p>
            </div>
          </div>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
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

export default Favorite;
