import React from "react";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>Hakkımızda</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Netflix teleparty, sınırsız şov, dizi ve film izlemenize olanak
                tanıyan bir tarayıcı uzantısıdır. Arkadaşlarınızla birlikte
                nerede ve ne kadar uzakta olursa olsun en son içeriklerin
                tamamını izleyebilirsiniz. Hala onlarla gösteri zamanınızın
                tadını çıkarabilirsiniz. Sohbet, sesli ve görüntülü aramalar
                gibi bazı şaşırtıcı özelliklere sahiptir. Bunlarla en sevdiğiniz
                filmleri ve şovları izlerken düşüncelerinizi paylaşabilirsiniz.
                Bu uzantıyı kullanmak için geçerli bir hesabınızın olması ve
                tarayıcı uzantısını yüklemeniz gerekir. Bundan sonra bir URL
                bağlantısı oluşturabilir ve partiyi barındırabilirsiniz. Herkes
                bağlandıktan sonra oynatma otomatik olarak senkronize
                edilecektir. Bu, herkesin aynı içeriği aynı anda görebileceği
                anlamına gelir; sanki hepiniz onu bir odada birlikte
                izliyormuşsunuz gibi hissedeceksiniz. En sevdiğiniz gösteri
                zamanına sahip olmanın en iyi yolu budur.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
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
