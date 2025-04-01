import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src={logo}
            alt="logo_cibervoluntarios"
            height="40"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#que-es">
                ¿Qué es?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#que-vamos-a-aprender">
                ¿Que vamos a aprender?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solicita-formacion">
                Solicita Informacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
