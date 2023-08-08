import React from "react";
import me from "../../images/me.jpg";
import linkIcon from "../../images/text__COLOR_font-main.svg";
import "./AboutMe.css";

export  default function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__intro">Студент</h3>
      <div className="about-me__info">
        <img className="about-me__avatar" src={me} alt="Фото студента"/>
        <div className="about-me__text">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__summary">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__github-link" href="https://github.com/annagroshkova" target="_blank">Github</a>
        </div>
      </div>
      <p className="about-me__portfolio">Портфолио</p>
      <ul className="about-me__portfolio-list">
        <li className="about-me__portfolio-item">
          <a className="about-me__portfolio-link" href="https://github.com/annagroshkova" target="_blank">
            <p className="about-me__portfolio-name">Статичный сайт</p>
            <img className="about-me__portfolio-link-icon" src={linkIcon} alt="Переход по ссылке"/>
          </a>
        </li>

        <li className="about-me__portfolio-item">
          <a className="about-me__portfolio-link" href="https://github.com/annagroshkova" target="_blank">
            <p className="about-me__portfolio-name">Адаптивный сайт</p>
            <img className="about-me__portfolio-link-icon" src={linkIcon} alt="Переход по ссылке"/>
          </a>
        </li>

        <li className="about-me__portfolio-item">
          <a className="about-me__portfolio-link" href="https://github.com/annagroshkova" target="_blank">
            <p className="about-me__portfolio-name">Одностраничное приложение</p>
            <img className="about-me__portfolio-link-icon" src={linkIcon} alt="Переход по ссылке"/>
          </a>
        </li>
      </ul>
    </section>
  )
}