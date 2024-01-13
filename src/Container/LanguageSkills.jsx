import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const IdiomasSection = () => {
  const [idiomas, setIdiomas] = useState([
    { nombre: 'Inglés', nivel: 70, certificacion: 'B2' },
    { nombre: 'Español', nivel: 100, certificacion: 'Lengua materna' },
  ]);

  const getNivelStyle = (nivel) => {
    const color = `#6a994e`;
    return { backgroundColor: color };
  };

  return (
    <div>
      <ul>
        {idiomas.map((idioma, index) => (
          <li key={index}>
            <span>{idioma.nombre}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <animated.div
                className="nivel-bar"
                style={{
                  width: `${idioma.nivel}%`,
                  height: '10px',
                  borderRadius: '5px',
                  ...getNivelStyle(idioma.nivel),
                }}
              />
              <span style={{ marginLeft: '5px' }}>{idioma.certificacion}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdiomasSection;
