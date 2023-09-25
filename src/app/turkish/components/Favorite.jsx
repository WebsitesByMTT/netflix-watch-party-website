import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>netflix aynı anda izleme</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Arkadaşlarınızla birlikte film izlemek ister misiniz? ancak
                  bazı nedenlerden dolayı yapamazsınız, bu yüzden
                  endişelenmeyin. Bu güçlü uzantıyı indirerek en sevdiğiniz
                  gösteri zamanını onlarla birlikte yaşayabilirsiniz. Ayrıca
                  sync watch Netflix ile. Bir programı izlerken konuşma veya
                  düşüncelerinizi paylaşma alışkanlığınız varsa sohbet, sesli ve
                  görüntülü görüşme gibi inanılmaz özellikleri sayesinde en
                  sevdiğiniz sahneyi tartışabilirsiniz. kullanmanın eğlenceli
                  yanının ne olduğunu biliyor musun netflix party? İfadelerinizi
                  emojiler aracılığıyla da paylaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Favorite;
