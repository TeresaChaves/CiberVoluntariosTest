import React from "react";
import "./Home.css";
import fondoheader from "../assets/img/fondoheader.png";
import fondo from "../assets/img/Fondo.png";
import imagen01 from "../assets/img/imagen01.png";
import imagen02 from "../assets/img/imagen02.png";
import imagen03 from "../assets/img/imagen03.png";

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
              <img className="img-fondo-home" src={fondo} alt="fondo" />
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
        <section>
          <article className="article-container">
            <div className="background-container">
              <h2 id="que-vamos-a-aprender">¿Que vamos a aprender?</h2>
              <div className="article-text">
                <p>
                  En (des)CONECTA - Conéctate contra la tecnoadicción,
                  organizamos{" "}
                  <strong>
                    cursos gratuitos para enseñar a jóvenes de 10 a 18 años
                    sobre el uso consciente, seguro y responsable de la
                    tecnología,
                  </strong>{" "}
                  ayudándoles a comprender cómo el uso excesivo de pantallas
                  puede afectar a su salud física y mental. Las personas
                  participantes aprenderán a:
                </p>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div
                      className="card"
                      style={{ width: "25rem", height: "100%" }}>
                      <div className="card-body">
                        <p className="number-card">1</p>
                        <p className="card-text">
                          Identificar los posibles{" "}
                          <strong>
                            síntomas de un uso excesivo de dispositivos,
                          </strong>{" "}
                          como la dificultad para conciliar el sueño, la
                          sensación de ansiedad, la falta de concentración o los
                          cambios de estado de ánimo, entre otros.
                        </p>
                      </div>
                      <img src={imagen03} class="card-img-top" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card"
                      style={{ width: "25rem", height: "100%" }}>
                      <div className="card-body">
                        <p className="number-card">2</p>
                        <p className="card-text">
                          Reconocer las posibles adicciones que pueden surgir de
                          este uso excesivo de las pantallas, como la nomofobia,
                          el vamping, el phubbing o el síndrome FOMO. Esto
                          permitirá a las personas jóvenes reflexionar sobre sus
                          propios hábitos digitales.
                        </p>
                      </div>
                      <img src={imagen01} class="card-img-top" alt="..." />
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card"
                      style={{ width: "25rem", height: "100%" }}>
                      <div className="card-body">
                        <p className="number-card">3</p>
                        <p className="card-text">
                          Identificar los posibles{" "}
                          <strong>
                            síntomas de un uso excesivo de dispositivos,
                          </strong>{" "}
                          como la dificultad para conciliar el sueño, la
                          sensación de ansiedad, la falta de concentración o los
                          cambios de estado de ánimo, entre otros.
                        </p>
                      </div>
                      <img src={imagen02} class="card-img-top" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Home;
