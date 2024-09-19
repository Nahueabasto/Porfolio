import React from "react";
import "./Footer.css"

//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="right">
          <h4>Sobre mi</h4>
          <p>
          Soy un desarrollador web Full Stack apasionado por crear experiencias atractivas, no solo desde el aspecto visual, sino también a nivel funcional. Además de la programación, tengo experiencia en edición de video, lo que me permite ofrecer un enfoque más completo en la creación de contenidos digitales. Mi curiosidad me caracteriza, siempre estoy aprendiendo y explorando nuevas tecnologías.
          </p>
        </div>

        <div className="left">
  <h4>Contacto</h4>
  <div className="icons">
  <a
    href="https://github.com/Nahueabasto"
    target="_blank"
    rel="noopener noreferrer"
    className="location"
  >
    <div className="location">
      <GitHubIcon
        size={20}
        style={{ color: "", fontSize: "1.8rem", marginRight: "1rem" }}
      />
    </div>
  </a>
  <a
    href="https://www.linkedin.com/in/nahuel-abasto-6b3579215/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="location">
        <LinkedInIcon
          size={20}
          style={{ color: "", fontSize: "1.8rem", marginRight: "1rem" }}
        />
    </div>
  </a>
  <a
    href="mailto:nahuel7474@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="location">
        <EmailIcon
          size={20}
          style={{ color: "", fontSize: "1.8rem", marginRight: "1rem" }}
        />
    </div>
  </a>
</div>
</div>
      
      </div>
    </div>
  );
};

export default Footer;