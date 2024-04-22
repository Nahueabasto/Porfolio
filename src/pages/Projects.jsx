import React, { useEffect } from 'react';
import NavbarAlt from "../components/NavbarAlt";
import CardProject from "../components/CardProject";
import Footer from "../components/Footer";

export default function Projects(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
        <NavbarAlt/>
        <CardProject/>
        <Footer/>
        </div>
    )
} 