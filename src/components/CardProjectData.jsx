import eco from "../img/eco.png";
import noticias from "../img/noticias.png";
import polleria from "../img/polleria.png";
import videoEco from "../img/EcoEcho.mp4";
import videoEconomia from "../img/Economia.mp4";
import videoPolleria from "../img/Polleria.mp4";
import nes from "../img/nes.png";
import pastas from "../img/p.png";

const CardProjectData = [
    {
        id: 1,
        imgsrc: eco,
        title: "E-commerce: Organic products",
        text: "Página de inicio principal con el nombre de la marca, barra de navegación con productos y un submenú de productos divididos por categorías, cada producto tiene información sobre el mismo.",
        deploy: "https://productos-ecologicos.vercel.app/",
        git: "https://github.com/Nahueabasto/Productos---Ecologicos",
        video: videoEco,
        deploy: "https://productos-ecologicos.vercel.app/",
        technological: "JavaScript, React, NodeJS, PostgresSQL, Express, Sequelize, Bootstrap, Git, GitHub, CSS, Trello.",
      },
      {
        id: 2,
        imgsrc: polleria,
        title: "Olivia Chicken Shop",
        text: "Este proyecto lo hice para una pollería, donde el cliente puede encontrar el contacto y los diferentes productos que venden.",
        git: "https://github.com/Nahueabasto/Polleria-Olivia",
        video: videoPolleria,
        deploy: "https://polleria-olivia.vercel.app/",
        technological: "JavaScript, React, Git, CSS.",
      },
    {
    id: 3,
    imgsrc: noticias,
    title: "Financial news",
    text: "Este proyecto lo hice de manera netamente autodidacta, donde a partir de solicitudes a una API, nos permite traer el precio del dólar, euro y diferentes criptomonedas.",
    git: "https://github.com/Nahueabasto/Economia",
    video: videoEconomia,
    deploy: "https://economia-theta.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
  {
    id: 4,
    imgsrc: nes,
    title: "News Argentina",
    text: "I did this project purely self-taught, where from requests to an API, it allows us to bring the price of the dollar, euro and different cryptocurrencies.",
    git: "https://github.com/Nahueabasto/Economia",
    video: videoEconomia,
    deploy: "https://digital4.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
  {
    id: 5,
    imgsrc: pastas,
    title: "News Argentina",
    text: "I did this project purely self-taught, where from requests to an API, it allows us to bring the price of the dollar, euro and different cryptocurrencies.",
    git: "https://github.com/Nahueabasto/Economia",
    video: videoEconomia,
    deploy: "https://listadepreciosali-mi-nahueabastos-projects.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
];

export default CardProjectData;