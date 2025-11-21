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
      <div className="container px-4 px-lg-5">
        <Hero />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;