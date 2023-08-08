import React from "react";
import logo from "../../images/logo.svg";
import promoImage from "../../images/text__COLOR_landing-logo.svg";
import "./Hero.css";
import {NavLink} from "react-router-dom";

export default function Hero() {

  return (
    <section className="hero">

      <div className="hero__container">

        <div className="hero__header">
          <img className="hero__logo" src={logo} alt="Логотип сайта" />
          <div className="hero__links">
            <NavLink className="hero__link hero__link_type_clear" to="/register">Регистрация</NavLink>
            <NavLink className="hero__link hero__link_type_filled" to="/login">Войти</NavLink>
          </div>
        </div>

        <div className="hero__promo">
          <img className="hero__promo-image" src={promoImage} alt="Иллюстрация глобуса"/>
          <div className="hero__info">
            <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="hero__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a className="hero__info-link" href="https://practicum.yandex.ru/frontend-developer/" target="_blank">Узнать больше</a>
          </div>
        </div>

      </div>

    </section>
  )
}