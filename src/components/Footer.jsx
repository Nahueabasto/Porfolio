import React from "react";
//Estilos
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
          <h4>About</h4>
          <p>
          I am a Full Stack Web Developer. I love creating engaging experiences, not only visually but also functionally. Another quality that characterizes me is curiosity. I am always learning new things. In programming, I found my passion.
          </p>
        </div>

        <div className="left">
  <h4>Contact</h4>
  <div className="icons">

    <a
      href="https://github.com/Nahueabasto"
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
        <GitHubIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "1.8rem", marginRight: "1rem" }}
        />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/nahuel-abasto-6b3579215/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="phone">
        <h4 className="h4">
          <LinkedInIcon
            className="mui"
            size={20}
            style={{ color: "#fff", fontSize: "1.8rem", marginRight: "1rem" }}
          />
        </h4>
      </div>
    </a>
    <a
      href="mailto:nahuel7474@gmail.com" // Usar "mailto:" para direcciones de correo electrónico
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="email">
        <h4>
          <EmailIcon
            size={20}
            style={{ color: "#fff", fontSize: "1.8rem", marginRight: "1rem" }}
          />
        </h4>
      </div>
    </a>
  </div>
</div>
      
      </div>
    </div>
  );
};

export default Footer;