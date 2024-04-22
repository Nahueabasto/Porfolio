import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import CardProjectData from './CardProjectData';
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Detalle.css"

const Detalle = () => {
  const { id } = useParams();
  const project = CardProjectData.find((proyect) => proyect.id === Number(id));

  // Ref para el contenedor del Detalle
  const detalleRef = useRef();

  // Cuando el componente Detalle se renderice, hacer scroll al contenedor
  useEffect(() => {
    detalleRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={detalleRef} className="detalle-f">
      <div className='titleee'>
        <h1>{project.title}</h1>
      </div>

  <div className='contenedor-detalleg'>
  <div className="columna-1">
    <h2>Descripción del proyecto:</h2>
    <p className="overview-text">{project.text}</p>
  </div>
  <div className="columna-2">
    <p>Tecnologias usadas: {project.technological}</p>
    <p>Deploy: <a href={project.deploy} target="_blank" rel="noopener noreferrer">
      {project.deploy}
    </a></p>
    <a
      href="https://github.com/Nahueabasto/Productos---Ecologicos"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="location">
        <GitHubIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "1.8rem", marginRight: "1rem", marginTop: "0px" }}
        />
        https://github.com/Nahueabasto/Productos---Ecologicos
      </div>
    </a>
  </div>
</div>
      
      {project.video && (
        <div>
          <video controls className="video">
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Detalle;

