import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "./Slider.css";
import Imagen from "../img/react.png";

const Slider = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Imagen} alt="Imagen de computadora" />
      </div>
      <div className="content">
        <h1>Full Stack Developer</h1>
        <p>NAHUEL ABASTO</p>
      </div>
    </div>
  );
};

export default Slider;