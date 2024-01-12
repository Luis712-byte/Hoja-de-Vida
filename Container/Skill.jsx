import React from "react";
import { Container } from "react-bootstrap";

function Skill() {
  return (
    <section>
      <Container>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Habilidades de Desarrollo
                </h5>
                <ul className="text-center">
                  <li>HTML</li>
                  <li>CSS/Bootstrap/Sass</li>
                  <li>JavaScript/TypeScript</li>
                  <li>React/React Native</li>
                  <li>Git y GitHub</li>
                  <li>SCRUM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Competencias</h5>
                <ul className="text-center">
                    <li>Comunicación Asertiva</li>
                    <li>Trabajo en Equipo</li>
                    <li>Gran Capacidad de Aprender</li>
                    <li>Adaptabilidad</li>
                    <li>Liderazgo</li>
                    <li>Manejo del Estrés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skill;
