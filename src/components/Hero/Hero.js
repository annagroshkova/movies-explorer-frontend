import React from 'react';
import promoImage from '../../images/text__COLOR_landing-logo.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__promo">
          <img className="hero__promo-image" src={promoImage} alt="Иллюстрация глобуса" />
          <div className="hero__info">
            <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="hero__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <a
              className="hero__info-link"
              href="https://practicum.yandex.ru/frontend-developer/"
              target="_blank"
              rel="noreferrer"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
