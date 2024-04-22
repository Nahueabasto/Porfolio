import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "./Card.css";

const Card = (props) => {
    return (
      <div className="project-card">
        <Link to={`/project/${props.id}`} style={{ textDecoration: "none" }}>
          <img src={props.imgsrc} alt="imagen" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            {/* <div>
              <button className="secondary-button">
                {props.view}
              </button>
            </div> */}
            <div className="pro-btns">
              {/* <a href={props.view} className="btn">
                VER
              </a> */}
            </div>
          </div>
        </Link>
      </div>
    );
  };

export default Card;

