import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMap } from "@fortawesome/free-solid-svg-icons";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import Perfil from "../Assets/Perfil.jpg";
import Navbar from "./NavBar";
import Formacion from "./Academic";
import LanguageSkills from "./LanguageSkills";
import Skill from "./Skill";
import Contact from "./Contact";
import LaboralExperience from "./LaboralExperience";

export default function Curriculum() {
  const contentRef = useRef();

  return (
    <>
      <Navbar contentRef={contentRef}></Navbar>
      <Container ref={contentRef}>
        <section>
          <Row className="d-flex align-items-center">
            <Col md={8}>
              <h1>LUIS ENRIQUE ACOSTA CASSIANI</h1>
              <li>
                <FontAwesomeIcon icon={faMap} /> Barranquilla, Atlantico
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> (+57) 3017580349
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> luisacosta7417@gmail.com
              </li>
              <li>
                <a
                  href="https://github.com/Luis712-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "10px" }}
                >
                  <img src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-acosta-ba72b9248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
            </Col>
            <Col md={4} className="text-md-right">
              <figure>
                <img
                  src={Perfil}
                  alt="Luis photo"
                  className="img-fluid"
                />
              </figure>
            </Col>
          </Row>
        </section>
        <div className="separator"></div>
        <section>
          <h3>PERFIL PROFESIONAL</h3>
          <p>
            Soy un apasionado desarrollador Frontend, dedicado a transformar
            ideas creativas en experiencias digitales impactantes. Destaco por
            mi profundo conocimiento en frameworks de JavaScript, así como por
            mi compromiso y disciplina en la ejecución de proyectos. Con una
            sólida formación técnica y una pasión innata por la programación,
            aspiro a contribuir de manera significativa al éxito de proyectos
            que desafíen los límites de la innovación tecnológica.
          </p>
        </section>
        <div className="separator"></div>
        <section>
          <h3>FORMACIÓN ACADEMICA</h3>
          <Formacion></Formacion>
        </section>
        <div className="separator"></div>
        <section>
          <h3>EXPERIENCIA LABORAL</h3>
          <LaboralExperience></LaboralExperience>
        </section>
        <div className="separator"></div>
        <section>
          <h3>HABILIDADES</h3>
          <Skill></Skill>
        </section>
        <div className="separator"></div>
        <section>
          <h3>IDIOMAS</h3>
          <LanguageSkills></LanguageSkills>
        </section>
        <div className="separator"></div>
        <section>
          <h3>CONTACTO</h3>
          <Contact></Contact>
        </section>
      </Container>
    </>
  );
}
