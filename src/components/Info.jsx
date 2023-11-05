import React from "react";
import MICV from "../img/cv.nahuel-in.pdf";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
        <div className="contenedor-detallee">
        <div className="colum-1">
            <h2>About:</h2>
            <p className="overview-tex">I am a Full Stack Web Developer. I love creating engaging experiences, not only visually but also functionally. Another quality that characterizes me is curiosity. I am always learning new things. In programming, I found my passion.</p>
        </div>
        <div className="colum-2">
            <h2>Technologies:</h2>
            <p>HTML | CSS | JavaScript | React |ReduxJS | SCRUM | ReactJS | NodeJS |PostgresSQL Express | Sequelize |Bootstrap | GitHub | Trello</p>
        </div>
        </div>

        <div className="cv-contenedor">
            <h2>CV</h2>
            <embed src={MICV} width="600" height="850" type="application/pdf" />
        </div>
    </div>
  );
};

export default Info;