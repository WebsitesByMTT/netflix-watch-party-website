import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Sınırsız şovları keşfedin Netflix party Chrome</h2>
            </div>
            <div className={styles.desc}>
              <p>
                En iyi şovları ve filmleri burada bulabilirsiniz. Yani, ister
                bir aksiyon gerilim filmi, ister eğlenceli bir komedi olsun, bu
                uzantı her anın, kahkahanın ve duygularınızın tadını daha önce
                hiç olmadığı gibi çıkarmanızı sağlar. Peki ne bekliyorsun? Hazır
                olun ve özel randevunuzla sanal randevunuzu planlayın ve onlarla
                değerli anılarınızı yaratın.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
