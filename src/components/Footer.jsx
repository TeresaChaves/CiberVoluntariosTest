import React from "react";
import "./Footer.css";
import fondofooter from "../assets/img/Subtract.png";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTiktok } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import logoblanco from "../assets/img/logoBlanco.png";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container-footer">
        <div className="container-logo-footer">
          <img
            src={logoblanco}
            alt="Logo de Fundación Cibervoluntarios"
            className="footer-logo"
          />
        </div>
        <nav className="footer-content" aria-label="Enlaces del pie de página">
          <section className="footer-column">
            <h3>Accesos Rápidos</h3>
            <hr className="custom-hr" />
            <ul>
              <li>
                <a href="#que-es">Qué es</a>
              </li>
              <li>
                <a href="#que-vamos-a-aprender">Qué vas a aprender</a>
              </li>
              <li>
                <a href="#solicita-formacion">Solicita formación gratuita</a>
              </li>
            </ul>
          </section>
          <section className="footer-column">
            <h3>Contacto</h3>
            <hr className="custom-hr" />
            <ul>
              <li>
                <a
                  href="tel:+34674727623"
                  aria-label="Llamar al +34 674 72 76 23">
                  <FaPhone aria-hidden="true" /> +34 674 72 76 23
                </a>
              </li>
              <li>
                <a
                  href="mailto:fundacion@cibervoluntarios.org"
                  aria-label="Enviar correo a Fundación Cibervoluntarios">
                  <MdEmail aria-hidden="true" /> fundacion@cibervoluntarios.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.cibervoluntarios.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar sitio web de Cibervoluntarios">
                  <TfiWorld aria-hidden="true" /> cibervoluntarios.org
                </a>
              </li>
            </ul>
          </section>
          <section className="footer-column">
            <h3>Redes Sociales</h3>
            <hr className="custom-hr" />
            <ul className="social-icons" aria-label="Enlaces a redes sociales">
              <li>
                <a
                  href="https://www.instagram.com/cibervoluntarios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram">
                  <SlSocialInstagram aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Cibervoluntarios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter">
                  <SlSocialTwitter aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Cibervoluntarios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook">
                  <SlSocialFacebook aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cibervoluntarios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn">
                  <SlSocialLinkedin aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Cibervoluntarios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube">
                  <SlSocialYoutube aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>
        </nav>
        <div className="footer-bottom">
          <hr className="custom-hr-final" />
          <ul className="political-rows">
            <li>
              <a href="#politica-privacidad">Política de Privacidad</a>
            </li>
            <li>
              <a href="#terminos-condiciones">Términos y condiciones</a>
            </li>
            <li>
              <a href="#politica-cookies">Política de Cookies</a>
            </li>
            <li>
              <a href="#accesibilidad-web">Accesibilidad Web</a>
            </li>
            <li>Fundación Cibervoluntarios 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
