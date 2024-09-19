import React from "react";
import "./Info.css";

const Info = () => {
  return (
    
        <div className="contenedor-detallee">
        <div className="colum-1">
            <h2>Sobre mi:</h2>
            <p className="overview-tex">Soy un desarrollador web Full Stack apasionado por crear experiencias atractivas, no solo desde el aspecto visual, sino también a nivel funcional. Además de la programación, tengo experiencia en edición de video, lo que me permite ofrecer un enfoque más completo en la creación de contenidos digitales. Mi curiosidad me caracteriza, siempre estoy aprendiendo y explorando nuevas tecnologías. En la programación encontré mi verdadera pasión, pero no me detengo ahí: la creatividad fluye en cada proyecto que emprendo.</p>
        </div>
        <div className="colum-2">
            <h2>Educacion:</h2>
            <p>- Full stack developer</p>
            <p>- Editor de video - <a href="https://www.youtube.com/@Neuro.Conciencia" target="_blank" style={{ color: '#00aaff', textDecoration: 'none' }}
  >
    Nauro Conciencia
  </a></p>
            <p>- Tecnico en administración de empresas</p>
        </div>
        {/* <div className="colum-2">
            <h2>Tecnologias:</h2>
            <p>HTML | CSS | JavaScript | React | React-Vite | ReduxJS | SCRUM | ReactJS | NodeJS | PostgresSQL | Express | Sequelize | MongoDB | Tailwind CSS | Bootstrap | GitHub | Trello.</p>
        </div> */}
     </div>
  );
};

export default Info;