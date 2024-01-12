import React from "react";

const AcademicFormation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" >
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Basica Secundaria</h5>
              <p className="card-text">Instituto La Salle</p>
              <p className="card-text">Año de graduación: 2019</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Ingeniero De Sistemas</h5>
              <p className="card-text">Universidad De La Costa</p>
              <p className="card-text">Año de inicio: 2020- Actualidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AcademicFormation;
