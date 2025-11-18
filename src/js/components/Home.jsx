import React from "react";

//importar componentes

import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create componentes
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;