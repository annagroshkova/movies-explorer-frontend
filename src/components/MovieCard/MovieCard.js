import React from 'react';
import savedIcon from '../../images/movie_saved_icon.svg';
import notSavedIcon from '../../images/movie_not-saved_icon.svg';
import deleteIcon from '../../images/delete-icon.svg';
import './MovieCard.css';

const urlPrefix = 'https://api.nomoreparties.co/'

/**
 * @typedef {import("../../types").Movie} Movie
 */

/**
 * @param {Movie} props.movie
 */
export default function MovieCard(props) {
  const movie =  props.movie;

  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__text">
          <h3 className="movie__title">{movie.nameRU}</h3>
          <p className="movie__duration">{formatDuration(movie.duration)}</p>
        </div>
        <button className="movie__save-button" type="button" aria-label="Сохранить">
          <img
            className="movie__save-icon"
            src={props.canDelete ? deleteIcon : movie.isSaved ? savedIcon : notSavedIcon}
            alt="Иконка сохранить"
          />
        </button>
      </div>
      <div className="movie__image-container">
        <a href={movie.trailerLink} target="_blank">
          <img className="movie__image" src={urlPrefix + movie.image.url} alt="Заставка к фильму" />
        </a>
      </div>
    </div>
  );
}

/**
 * @param {number} duration
 * @returns {string}
 */
function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours > 0) {
    return `${hours}ч ${minutes}м`;
  }

  return `${minutes}м`;

}