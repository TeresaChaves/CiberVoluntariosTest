import React from "react";
import "./Home.css";
import fondoheader from "../assets/img/fondoheader.png";
import fondo from "../assets/img/Fondo.png";

function Home() {
  return (
    <div>
      <header className="header-container">
        <div className="container-header">
          <h1 className="header-text">Protege tu bienestar digital</h1>
          <p>
            (des)CONECTA ofrece formación gratuita para enseñar a jóvenes de 10
            a 18 años a usar la tecnología de forma segura y saludable, y
            conocer los riesgos del uso excesivo de pantallas en su salud física
            y mental.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            aria-label="Solicitar información gratuita">
            Solicita Informacion de manera gratuita
          </button>
        </div>
        <div className="header-image-container">
          <img
            className="img_header"
            src={fondoheader}
            alt="Imagen destacada"
          />
        </div>
      </header>
      <main className="main-content">
        <section aria-labelledby="que-es">
          <article className="article-container">
            <h2 id="que-es">¿Qué es?</h2>
            <div className="article-text">
              <p>
                <strong>
                  Cursos gratuitos para jóvenes de entre 10 y 18 años para
                  enseñarles a usar la tecnología de manera saludable, positiva
                  y responsable.
                </strong>{" "}
                Además, aprenderán sobre los riesgos de pasar demasiado tiempo
                frente a las pantallas y cómo esto puede afectar tanto a su
                salud física como mental. Cualquier centro educativo o entidad
                que trabaje en la educación de jóvenes puede solicitarlos.
              </p>
            </div>
            <button
              className="btn btn-secondary"
              type="button"
              aria-label="Solicitar información gratuita">
              Solicita Informacion de manera gratuita
            </button>
            <div className="article-fondo-container">
              <img src={fondo} alt="fondo" />
            </div>

            <div className="video-container">
              <iframe
                width="1296"
                height="729"
                src="https://www.youtube.com/embed/2o5NNVumrDg"
                title="Video de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Home;
