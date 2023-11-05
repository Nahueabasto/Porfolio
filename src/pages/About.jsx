import React from "react";
import NavbarAlt from "../components/NavbarAlt";
import Info from "../components/Info";
import MICV from "../img/cv.nahuel-in.pdf"
import Footer from "../components/Footer";
import "../components/Info.css"

export default function About(){
    return(
        <div>
        <NavbarAlt/>
        <Info/>
        <div>
        <h2>CURRICULUM VITAE.</h2>
        </div> 
        <div className="cv-contenedor">
         <embed src={MICV} width="600" height="850" type="application/pdf" />
         </div>
        <Footer/>
        </div>
    )
} 