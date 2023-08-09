import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project">
      <h3 className="about-project__intro">О проекте</h3>
      <div className="about-project__description">
        <div className="about-project__info-block">
          <h4 className="about-project__subtitle">Дипломный проект включал 5 этапов</h4>
          <p className="about-project__details">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about-project__info-block">
          <h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
          <p className="about-project__details">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeframe">
        <div className="about-project__sprint about-project__sprint_1">1 неделя</div>
        <div className="about-project__sprint about-project__sprint_2">4 недели</div>
        <p className="about-project__caption">Back-end</p>
        <p className="about-project__caption">Front-end</p>
      </div>
    </section>
  );
}
