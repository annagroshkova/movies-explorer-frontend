import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    const hasPreviousPage = window.history.length > 1;

    if (hasPreviousPage) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <div className="not-found__text">
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__link" onClick={handleGoBack}>
          Назад
        </button>
      </div>
    </div>
  );
}
