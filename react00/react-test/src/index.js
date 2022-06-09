import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import Footer from "./footer/footer";
import Header from "./header/header";
import Emoji from "./emoji/emoji";
import Produit from "./produit/produit";
import Message from "./message/message";
import Card from "./card/card";
import CardProps from "./cardProps/cardProps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Emoji />
    <Produit />
    <Message messagePasser="Yo les Reacteux !" prenom="Maurice" />
    <Message messagePasser="I love green." prenom="Rachida" />
    <Message messagePasser="Faite l'amour et du JSX !" prenom="Geraldine" />
    <Card />
    <CardProps
      id="1"
      img="https://imgs.search.brave.com/D6gLXu5qApNjnKMpUYyIN3NaVgoPs_VnkIH8QZTWd4g/rs:fit:924:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/ZTVrdUZOTEltNW54/Ny1rVXNEeTVnSGFE/eiZwaWQ9QXBp"
      alt="lunette avec entonoir pour goute"
      titre="Goute Direct"
      description="Un appareil revolutionnaire pour mettre des goutes dans les yeux !"
      prix="49.99$"
      Avis="Avis: 84"
    />
    <CardProps
      id="3"
      img="https://imgs.search.brave.com/jdimiCS0YtS24Xz_Zb0NLu_Um4RseplCph5EJr3JL60/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/cGhoV2lhZ29CUGpQ/UmhtenlrQTFnSGFF/NyZwaWQ9QXBp"
      alt="ventillteur a nouille"
      titre="Venti-Nouille"
      description="Un appareil revolutionnaire pour manger des nouilles sans se bruler !"
      prix="39.99$"
      Avis="Avis: 823"
    />
    <CardProps
      id="2"
      img="https://imgs.search.brave.com/sDNP0IkVDuruFMfQ6TsJyF1LPCJZWgxAglsK2C_3bBY/rs:fit:688:324:1/g:ce/aHR0cDovL3N0YXRp/Yy5oaXRlay5mci9p/bWcvYWN0dWFsaXRl/L2lfZ2FkZ2V0LWph/cG9uYWlzLWlsbHVz/dC5qcGc"
      alt="masque gainnage"
      titre="Masque gainnage"
      description="Un masque pour muscler la machoire !"
      prix="19.99$"
      Avis="Avis: 278"
    />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
