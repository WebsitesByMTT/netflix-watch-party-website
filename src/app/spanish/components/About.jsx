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
              <h2>About us</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Netflix teleparty es una extensión del navegador que te permite
                tener programas, series y películas ilimitadas. Puedes ver el
                contenido más reciente con tus amigos, sin importar dónde estén
                y qué tan lejos estén. Aún puedes disfrutar de tu show con
                ellos. Tiene algunas funciones sorprendentes que incluyen chat,
                audio y videollamadas. Con estos, puedes compartir tus
                pensamientos mientras miras tus películas y programas favoritos.
                Solo para usar esta extensión, debes tener una cuenta válida e
                instalar la extensión del navegador. Después de eso, puedes
                crear un enlace URL y organizar la fiesta. Una vez que todos
                estén conectados, la reproducción se sincronizará
                automáticamente. Esto significa que todos pueden ver el mismo
                contenido en el momento exacto, se sentirá como si todos lo
                estuvieran viendo juntos en una habitación. Es la mejor manera
                de tener tu programa favorito.
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
