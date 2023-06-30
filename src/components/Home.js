import React from "react";
import Hero from "./Hero";
import AboutProject from "./AboutProject";
import Techs from "./Techs";

export default  function Home() {

  return (
    <div className="home">
      <Hero />
      <AboutProject />
      <Techs />
    </div>
  )
}