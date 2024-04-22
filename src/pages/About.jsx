import React, { useEffect } from 'react';
import NavbarAlt from "../components/NavbarAlt";
import Info from "../components/Info";
import MICV from "../img/cv-a.pdf"
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../components/Info.css"

export default function About(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
        <NavbarAlt/>
        <Info/>
        {/* <Logo/> */}
        <div className="cv">
        <h2>CURRICULUM VITAE.</h2>
        </div> 
        <div className="cv-contenedor">
         <embed src={MICV} width="600" height="850" type="application/pdf" />
         </div>
        <Footer/>
        </div>
    )
} 