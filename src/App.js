import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import Carddd from "./components/Carddd";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aprop from "./components/Aprop";
import Navi from "./components/Navi";
import Secoonecttt from "./components/Secoonecttt";
import Enchcou from "./components/Enchcou";
import Encht from "./components/Encht";
import Mooredesc from "./components/Mooredesc";
function App() {
  const [data, setData] = useState([
    //voiture
    {
      id: 1,
      name: "Range Rover",
      price: 400000000,
      img1: "https://catalogue.automobile.tn/big/2019/08/45506.jpg?t=1595890512",
      descriptionlong:
        "Tout aussi habile sur les routes que sur les sentiers, l’Evoque mise sur un quatre cylindres de 246 chevaux, ou 286 dans le cas de la version à hybridation légère. Le plus petit des Range Rover est disponible avec une foule de caractéristiques, dont un système de caméras affichant une vue translucide de la partie avant du VUS, facilitant les manœuvres hors route, mais aussi avec un système multimédia à deux écrans tactiles et une instrumentation numérique pour le conducteur",
      description:
        " Le Range Rover est une gamme d'automobiles tout-terrain/SUV luxueux produits par le constructeur automobile britannique Land Rover depuis 1970.",
      img: "https://s.alicdn.com/@sc04/kf/H17e763ea062b4cd59dcab3bb275a7a9eu/201680093/H17e763ea062b4cd59dcab3bb275a7a9eu.jpg",
    },
    //maison
    {
      id: 2,
      name: "maison",
      price: 320000000,
      description:
        " Amilcar est la nouvelle résidence de Baroque Immobilière, idéalement située à Sidi Bou Said",

      img: "https://actualite.seloger-construire.com/sites/default/files/article/image/maison-en-l-seloger-construire.jpg",
    },
    //vetements
    {
      id: 3,
      name: "Zara",
      price: 150,
      description:
        "côté noir en lycra fonctionnel élastique et respirant pour une bonne gestion de l'humidité",
      img: "https://tendance-fashion.com/wp-content/uploads/2020/12/124412412_2984503051770646_7645483774130567783_n.jpg",
    },
    //electro
    {
      id: 4,
      name: "MACBOOK",
      price: 2999000,
      description:
        "Apple MacBook 12 : Ecran Retina de 12IPS (2304 x 1440 pixels) - Processeur  Intel Core M (Dual-Core 1.1 GHz / 2.4 GHz Turbo, cache 4 Mo) - Mémoire 8 Go LPDDR3 - Disque 256 Go SSD - Carte Graphique Intel HD Graphics 5300 - Webcam Facetime 480p - wifi - Bluetooth 4.0 - USB 3.1 - DisplayPort 1.2 - Mac OS X Yosemite Français - Poids 0,92 kg",
      img: "https://www.technopro-online.com/20970-thickbox_default/prix-apple-macbook-12-intel-core-m-256-go-or-tunisie.jpg",
    },
    //meubles
    {
      id: 5,
      name: "chambre à coucher",
      price: 5000000,
      description:
        "Un véritable plaisir pour les yeux, la chambre moderne se caractérise par son mobilier adoptant la géométrie stricte et par son décor généralement simple et chic. De plus en plus souvent, le lit et les têtes de lit forment un tout inséparable ultra élégant.",
      img: "https://www.matelpro.com/magazine/wp-content/uploads/2015/12/chambre-adulte-moderne-blanc-beton-carolina.jpg",
    },
    //medicales
    {
      id: 6,
      name: "Lit médicalisé",
      price: 80,
      description:
        " Lit médicalisé à double croisillons Amplitude de hauteur variable de 24,5 cm à 80 cm.Télécommande verrouillable fonction par fonction. ",
      img: "https://www.serphadom.com/527-large_default/lit-medicalise-aerys.jpg",
    },
    //agricole
    {
      id: 7,
      name: "Tracteur",
      price: 170000000,
      description:
        "Polyvalents, les tracteurs agricoles, disposent de trois fonctions principales : Ils peuvent tracter, tirer des machines agricoles ou encore des remorques pour le transport. Ils servent également de support pour les machines, outils et accessoires agricoles, que l'on peut retrouver à l'avant ou à l'arrière du tracteur.",
      img: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/c/b/2/cb27477289_50150772_innovation-machine-agricole.jpg",
    },
  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navi />

        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/propos" element={<Aprop />} />
          <Route path="/connecttt" element={<Secoonecttt />} />
          <Route path="/Enchcou/:id" element={<Enchcou data={data} />} />
          <Route path="/enchtt/:id/:price" element={<Encht data={data} />} />
          <Route path="/mooredesc/:id" element={<Mooredesc data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
