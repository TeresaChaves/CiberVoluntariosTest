import React from "react";
import "./Home.css";
import fondoheader from "../assets/img/fondoheader.png";
import fondo from "../assets/img/Fondo.png";
import imagen01 from "../assets/img/imagen01.png";
import imagen02 from "../assets/img/imagen02.png";
import imagen03 from "../assets/img/imagen03.png";
import { useState } from "react";
import { Form, Row, Col, Table } from "react-bootstrap";
import imagenFinal from "../assets/img/imgFinal.png";
import ministerio from "../assets/img/Ministerio.png";
import cibervoluntarios from "../assets/img/cibervoluntarios.png";

function Home() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      firstName: firstName ? "" : "El nombre es obligatorio",
      lastName: lastName ? "" : "El apellido es obligatorio",
      email: email && /\S+@\S+\.\S+/.test(email) ? "" : "El email no es válido",
      phone:
        phone && /^\d+$/.test(phone)
          ? ""
          : "El teléfono solo puede contener números",
    };

    setErrors(newErrors);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");

    if (Object.values(newErrors).every((error) => error === "")) {
      setUsers([...users, { firstName, lastName, email, phone }]);
    }
  };
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
            aria-label="Solicitar información gratuita"
            onClick={() => handleScrollToSection("solicita-formacion")}>
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
        <section id="que-es" aria-labelledby="que-es">
          <article className="article-container">
            <h2 className="title_home">¿Qué es?</h2>
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
              aria-label="Solicitar información gratuita"
              onClick={() => handleScrollToSection("solicita-formacion")}>
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
        <section
          id="que-vamos-a-aprender"
          aria-labelledby="que-vamos-a-aprender">
          <article className="article-container">
            <div className="background-container">
              <h2 className="title_home">¿Que vamos a aprender?</h2>
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
                    <div className="card">
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
                    <div className="card">
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
                    <div className="card">
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
              <button
                className="btn btn-secondary"
                type="button"
                aria-label="Solicitar información gratuita"
                onClick={() => handleScrollToSection("solicita-formacion")}>
                Solicita Informacion de manera gratuita
              </button>
            </div>
          </article>
        </section>
        <section id="solicita-formacion" aria-labelledby="solicita-formacion">
          <div className="container mt-4">
            <h2 className="title_home">Solicita información gratuita</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label htmlFor="firstName"></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      value={firstName}
                      isInvalid={!!errors.firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    {errors.firstName && (
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label htmlFor="lastName"></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Apellidos"
                      aria-label="Apellidos"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      isInvalid={!!errors.lastName}
                    />
                    {errors.lastName && (
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label htmlFor="email"></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    isInvalid={!!errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label htmlFor="phone"></Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Teléfono"
                    aria-label="Teléfono"
                    value={phone}
                    isInvalid={!!errors.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {errors.phone && (
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Row>

              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleSubmit}
                aria-label="Solicitar información gratuita">
                Solicita
              </button>
            </Form>

            {/* Tabla para mostrar usuarios registrados */}
            {users.length > 0 && (
              <div className="mt-4">
                <h3>Usuarios Registrados</h3>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Teléfono</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </section>
        <section>
          <div className="container-image-final">
            <img src={imagenFinal} className="img-final" alt="imagen final" />
          </div>
        </section>
        <section>
          <div className="container_logos-final">
            <img
              src={cibervoluntarios}
              className="img-logo-creditos"
              alt="cibervoluntarios"
            />
            <img
              src={ministerio}
              className="img-logo-creditos"
              alt="ministerio"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
