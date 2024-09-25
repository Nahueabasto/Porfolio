import React from "react";
// Estilos
import "./Card.css";

const Card = (props) => {
    return (
      <div className="project-card">
        {/* Usar un enlace <a> con target="_blank" para abrir en una nueva pestaña */}
        <a href={props.deploy} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <img src={props.imgsrc} alt="imagen" />
          <h3 className="project-title">{props.title}</h3>
          <div className="pro-details">
            <div className="pro-btns">
              {/* Puedes agregar más botones o contenido aquí */}
            </div>
          </div>
        </a>
      </div>
    );
  };

export default Card;
