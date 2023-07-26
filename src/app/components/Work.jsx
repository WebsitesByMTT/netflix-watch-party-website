import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">How to join the extension</h2>

          <ul className={styles.content}>
            <li>Install the extension</li>
            <li>
              After installing it, you need to activate your valid account on it
            </li>
            <li>
              You will receive invitations from your friends to watch the
              content
            </li>
            <li>Then click the URL link or enter the code</li>
            <li>Join the party</li>
            <li>
              Interact with your friends and family while watching a series or
              movies via chat, audio calls, and video calls
            </li>
          </ul>

          <p>
            It’s just you need to have your own active subscription to the
            streaming platform where the content is available to join the party.
            In this extension, you can enjoy chat and calls with your loved
            ones.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
