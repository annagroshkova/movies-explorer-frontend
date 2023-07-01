import React from "react";
import logo from "../images/logo.svg";
import promoImage from "../images/text__COLOR_landing-logo.svg";

export default function Hero() {

  return (
    <section className="hero">

      <div className="hero__container">

        <div className="hero__header">
          <img className="hero__logo" src={logo} />
          <div className="hero__links">
            <a className="hero__link hero__link_type_clear" href="#">Регистрация</a>
            <a className="hero__link hero__link_type_filled" href="#">Войти</a>
          </div>
        </div>

        <div className="hero__promo">
          <div className="hero__info">
            <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="hero__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a className="hero__info-link" href="#">Узнать больше</a>
          </div>
          <img className="hero__promo-image" src={promoImage} />
        </div>

      </div>

    </section>
  )
}