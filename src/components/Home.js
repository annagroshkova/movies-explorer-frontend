import React from "react";
import Hero from "./Hero";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

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