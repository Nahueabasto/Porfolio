import eco from "../img/eco.png";
import noticias from "../img/noticias.png";
import polleria from "../img/polleria.png";
import videoEco from "../img/EcoEcho.mp4";
import videoEconomia from "../img/Economia.mp4";
import videoPolleria from "../img/Polleria.mp4";

const CardProjectData = [
    {
        id: 1,
        imgsrc: eco,
        title: "E-commerce: Organic products",
        text: "Main home page with the brand name,navigation bar with products and a submenuof products divided by categories, eachproduct has information about it.",
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
        text: "I did this project for a chicken shop, wherethe client can find the contact and thedifferent products they sell.",
        git: "https://github.com/Nahueabasto/Polleria-Olivia",
        video: videoPolleria,
        deploy: "https://polleria-olivia.vercel.app/",
        technological: "JavaScript, React, Git, CSS.",
      },
    {
    id: 3,
    imgsrc: noticias,
    title: "Financial news",
    text: "I did this project purely self-taught, where from requests to an API, it allows us to bring the price of the dollar, euro and different cryptocurrencies.",
    git: "https://github.com/Nahueabasto/Economia",
    video: videoEconomia,
    deploy: "https://economia-theta.vercel.app/",
    technological: "JavaScript, React, NodeJS, Express, Sequelize, Git, CSS.",
  },
];

export default CardProjectData;