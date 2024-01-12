import React from "react";

export default function Aside() {
  return (
    <>
      <aside className="aside">
        <div className="img">
         
        </div>
        <div className="informacion_contacto">
          <h3>{("curriculum.contacto")}</h3>
          <ul>
            <li>
              <b>{("curriculum.WhatsApp")}</b> (+57)3242513097
            </li>
            <li>
              <b>{("curriculum.Correo")}</b> js.grisales03@gmail.com
            </li>
            <li>
              <b>{("curriculum.Redes")}:</b>
              <div className="container_redes">
                <ul className="lista_redes">
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3>{("curriculum.FECHA/LUGAR DE NACIMIENTO")}</h3>
          <ul>
            <li>{("curriculum.13 de Marzo de 1995")}</li>
            <li>{("curriculum.Pereira")}</li>
          </ul>
        </div>
        <div>
          <h3>{("curriculum.NACIONALIDAD")}</h3>
          <ul>
            <li>{("curriculum.Colombiano")}</li>
          </ul>
        </div>

        <div>
          <h3>{("curriculum.COMPETENCIAS")}</h3>
          <ul>
            <li>{("curriculum.Comunicación asertiva")}</li>
            <li>{("curriculum.Trabajo en equipo")}</li>
            <li>{("curriculum.Buenas relaciones sociales")}</li>
            <li>{("curriculum.Gran capacidad de aprender")}</li>
            <li>{("curriculum.Escucha activa")}</li>
          </ul>
        </div>
        <div>
          <h3>{("curriculum.IDIOMAS")}</h3>
          <ul>
            <li>{("curriculum.Español nativo/competencia profesional")}</li>
            <li>{("curriculum.Inglés B1")}</li>
          </ul>
        </div>
        <div>
          <h3>{("curriculum.Licencia de conducción")}</h3>
          <ul>
            <li>{("curriculum.Moto A2")}</li>
            <li>{("curriculum.Carro B1")}</li>
          </ul>
        </div>
      </aside>
    </>
  );
}
