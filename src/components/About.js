import React from "react";
import me from "../images/me.jpg";
import linkIcon from "../images/text__COLOR_font-main.svg";

export  default function About() {
  return (
    <section className="about">
      <h3 className="about__intro">Студент</h3>
      <div className="about__info">
        <div className="about__text">
          <p className="about__name">Виталий</p>
          <p className="about__summary">Фронтенд-разработчик, 30 лет</p>
          <p className="about__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about__github-link" href="#">Github</a>
        </div>
        <img className="about__avatar" src={me} />
      </div>
      <p className="about__portfolio">Портфолио</p>
      <ul className="about__portfolio-list">
        <li className="about__portfolio-item">
          <a className="about__portfolio-link" href="#">
            <p className="about__portfolio-name">Статичный сайт</p>
            <img className="about__portfolio-link-icon" src={linkIcon}/>
          </a>
        </li>

        <li className="about__portfolio-item">
          <a className="about__portfolio-link" href="#">
            <p className="about__portfolio-name">Адаптивный сайт</p>
            <img className="about__portfolio-link-icon" src={linkIcon}/>
          </a>
        </li>

        <li className="about__portfolio-item">
          <a className="about__portfolio-link" href="#">
            <p className="about__portfolio-name">Одностраничное приложение</p>
            <img className="about__portfolio-link-icon" src={linkIcon}/>
          </a>
        </li>
      </ul>
    </section>
  )
}