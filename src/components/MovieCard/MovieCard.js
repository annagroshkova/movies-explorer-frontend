import React from 'react';
import savedIcon from '../../images/movie_saved_icon.svg';
import notSavedIcon from '../../images/movie_not-saved_icon.svg';
import deleteIcon from '../../images/delete-icon.svg';
import './MovieCard.css';

export default function MovieCard(props) {

  const { card } = props;
  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__text">
          <h3 className="movie__title">{card.title}</h3>
          <p className="movie__duration">{card.duration}</p>
        </div>
        <button className="movie__save-button" type="button" aria-label="Сохранить">
          <img
            className="movie__save-icon"
            src={props.canDelete ? deleteIcon : card.isSaved ? savedIcon : notSavedIcon}
            alt="Иконка сохранить"
          />
        </button>
      </div>
      <div className="movie__image-container">
        <img className="movie__image" src={card.image} alt="Заставка к фильму" />
      </div>
    </div>
  );
}
