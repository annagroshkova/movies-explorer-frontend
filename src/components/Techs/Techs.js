import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className="technologies">
      <div className="technologies__container">
        <h3 className="technologies__intro">Технологии</h3>
        <h2 className="technologies__title">7 технологий</h2>
        <p className="technologies__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="technologies__list">
          <li className="technologies__technology">HTML</li>
          <li className="technologies__technology">CSS</li>
          <li className="technologies__technology">JS</li>
          <li className="technologies__technology">React</li>
          <li className="technologies__technology">Git</li>
          <li className="technologies__technology">Express.js</li>
          <li className="technologies__technology">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
