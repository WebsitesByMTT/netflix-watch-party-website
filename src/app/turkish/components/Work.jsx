import React from "react";
import styles from "@/app/styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">Netflix telepartisine nasıl katılabilirsiniz?</h2>

          <ul className={styles.content}>
            <li>Tarayıcınıza gidin ve uzantıyı yükleyin</li>
            <li>Kurduktan sonra chrome&apos;a ​​ekleyebilirsiniz.</li>
            <li>Daha sonra geçerli hesabınızı etkinleştirmeniz gerekir.</li>
            <li>
              Artık URL bağlantısını oluşturabilir ve partiye katılmaları için
              arkadaşlarınıza gönderebilirsiniz.
            </li>
          </ul>

          <p>
            Sohbet, sesli ve görüntülü görüşme gibi inanılmaz özellikleri
            sayesinde, gösteri zamanınızı geçirirken arkadaşlarınız ve ailenizle
            etkileşimde bulunabilirsiniz. En son içeriği alacağınız yayın
            platformunda geçerli hesabınızı etkinleştirmeniz yeterlidir.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
