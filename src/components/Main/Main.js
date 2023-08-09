import React from 'react';
import Hero from '../Hero/Hero';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}
