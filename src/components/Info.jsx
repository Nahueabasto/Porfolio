import React from "react";
import "./Info.css";

const Info = () => {
  return (
    
        <div className="contenedor-detallee">
        <div className="colum-1">
            <h2>Sobre mi:</h2>
            <p className="overview-tex">Soy un desarrollador web Full Stack. Me encanta crear experiencias atractivas, no sólo visualmente sino también funcionalmente. Otra cualidad que me caracteriza es la curiosidad. Siempre estoy aprendiendo cosas nuevas. En la programación encontré mi pasión.</p>
        </div>
        <div className="colum-2">
            <h2>Educacion:</h2>
            <p>- Full stack developer</p>
            <p>- Tecnico en administracion de empresas</p>
        </div>
        {/* <div className="colum-2">
            <h2>Tecnologias:</h2>
            <p>HTML | CSS | JavaScript | React | React-Vite | ReduxJS | SCRUM | ReactJS | NodeJS | PostgresSQL | Express | Sequelize | MongoDB | Tailwind CSS | Bootstrap | GitHub | Trello.</p>
        </div> */}
     </div>
  );
};

export default Info;