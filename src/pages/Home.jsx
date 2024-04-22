import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function Home(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
        <Navbar/>
        <Slider/>
        <Footer/>
        </div>
    )
} 