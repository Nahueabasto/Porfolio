import React, { useEffect } from 'react';
import NavbarAlt from "../components/NavbarAlt";
import Detalle from "../components/Detalle";
import Footer from "../components/Footer";

export default function DetallePage(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
        <NavbarAlt/>
        <Detalle/>
        <Footer/>
        </div>
    )
} 