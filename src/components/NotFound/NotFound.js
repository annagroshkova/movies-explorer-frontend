import React from "react"
import "./NotFound.css";
import {Link} from "react-router-dom";

export default function NotFound() {
  return (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <div className="not-found__text">
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>
  </div>
  )
}