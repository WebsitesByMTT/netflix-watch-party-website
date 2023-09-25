import React from "react";
import styles from "@/app/styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">como usar netflix party</h2>

          <ul className={styles.content}>
            <li>Vaya a su navegador e instale la extensión.</li>
            <li>Después de instalarlo, puedes agregarlo a Chrome.</li>
            <li>Luego, debe activar su cuenta válida en él.</li>
            <li>
              Ahora puedes crear el enlace URL y enviárselo a tus amigos para
              que se unan a la fiesta.
            </li>
          </ul>

          <p>
            Con sus increíbles funciones como chat, audio y videollamadas,
            puedes interactuar con tus amigos y familiares mientras disfrutas de
            tu show. Solo necesitas activar tu cuenta válida en la plataforma de
            transmisión donde obtendrás el contenido más reciente.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
