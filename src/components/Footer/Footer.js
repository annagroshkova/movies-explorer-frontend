import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__content">
        <div className="footer__links">
          <a className="footer__link" href="#">Яндекс.Практикум</a>
          <a className="footer__link" href="#">Github</a>
        </div>
        <p className="footer__current-year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}


