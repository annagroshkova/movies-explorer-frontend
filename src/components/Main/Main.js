import React from 'react';
import Hero from '../Hero/Hero';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import './Main.css';
import Header from '../Header/Header';

export default function Main() {
  return (
    <div className="main">
      <Header theme="main" />
      <Hero />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}
