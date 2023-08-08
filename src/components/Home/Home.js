import React from "react";
import Hero from "../Hero/Hero";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import "./Home.css";

export default  function Home() {

  return (
    <div className="home">
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  )
}