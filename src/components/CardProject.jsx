import React from "react";
import Card from "./Card";
import CardProjectData from "./CardProjectData";
import "./CardProject.css";


const CardProject = () => {
  return (
    <div className="CardProduct-container">
      <h2 className="project-heading">Mis proyectos</h2>
      {/* <p className="project-p">Alquiler temporario de casas amoblados y equipados para una confortable estadía en la ciudad de Tanti Córdoba.</p> */}
      <div className="project-container">
        {CardProjectData.map((val, ind) => {
          return (
            <Card
              id={val.id}
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
              deploy={val.deploy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardProject;