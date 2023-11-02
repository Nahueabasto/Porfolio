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
          <h4>Sobre Mí</h4>
          <p>
            Soy Nahuel y en este portfolio les voy a mostrar algunos de mis
            trabajos.
          </p>
        </div>
        <div className="left">
          <a href="https://github.com/Nahueabasto">
            <div className="location">
              <GitHubIcon
                className="mui"
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
              
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nahuel-abasto-6b3579215/">
            <div className="phone">
              <h4 className="h4">
                <LinkedInIcon
                  className="mui"
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
              </h4>
            </div>
          </a>
          {/* <div className="email">
            <h4>
              <EmailIcon
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            
            </h4>
          </div> */}
        </div>
      
      </div>
    </div>
  );
};

export default Footer;