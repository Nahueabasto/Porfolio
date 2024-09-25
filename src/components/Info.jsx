import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Info.css";

const Info = () => {
  return (
    
        <div className="contenedor-detallee">
        <div className="colum-1">
            <h2>Sobre mi:</h2>
            <p className="">Soy un desarrollador web Full Stack apasionado por crear experiencias atractivas, no solo desde el aspecto visual, sino también a nivel funcional. Además de la programación, tengo experiencia en edición de video, lo que me permite ofrecer un enfoque más completo en la creación de contenidos digitales. Mi curiosidad me caracteriza, siempre estoy aprendiendo y explorando nuevas tecnologías.</p>
        </div>
        <div className="colum-2">
  <h2>Educacion:</h2>
  <p>- Full stack developer</p>
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <p style={{ margin: 0, color: '#fff', fontSize: '16px' }}>- Editor de videos</p>
    <div style={{ 
      backgroundColor: '#fff', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '13px',  // Ajustar el ancho
      height: '13px'  // Ajustar la altura
    }}>
      <YouTubeIcon size={24} style={{ color: '#FF0000' }} /> {/* Ajusta el tamaño aquí si es necesario */}
    </div>
    <a 
      href="https://www.youtube.com/@Neuro.Conciencia" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#00aaff', textDecoration: 'none', fontSize: '16px', lineHeight: '30px' }}
    >
      Nauro Conciencia
    </a>  
  </div>
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