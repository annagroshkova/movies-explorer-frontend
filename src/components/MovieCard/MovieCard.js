import React from 'react';
import savedIcon from '../../images/movie_saved_icon.svg';
import notSavedIcon from '../../images/movie_not-saved_icon.svg';
import deleteIcon from '../../images/delete-icon.svg';
import './MovieCard.css';
import { MOVIE_URL_PREFIX } from '../../utils/constants';

/**
 * @typedef {import("../../types").BeatMovie} BeatMovie
 * @typedef {import("../../types").ApiMovie} ApiMovie
 */

/**
 * @param {BeatMovie} props.movie
 * @param {boolean} props.liked
 * @param {boolean} props.canDelete
 * @param {(movie: BeatMovie) => any} props.onLike
 * @param {(movieId: number) => any} props.onUnlike
 */
export default function MovieCard(props) {
  const { movie, liked, canDelete, onLike, onUnlike } = props;

  async function handleSaveDeleteClick() {
    if (canDelete || liked) {
      onUnlike(movie.id);
    } else {
      onLike(movie);
    }
  }

  const alt = canDelete || liked ? 'убрать из сохранённых' : 'сохранить';

  return (
    <div className="movie">
      <div className="movie__info">
        <div className="movie__text">
          <h3 className="movie__title">{movie.nameRU}</h3>
          <p className="movie__duration">{formatDuration(movie.duration)}</p>
        </div>
        <button
          className="movie__save-button"
          type="button"
          aria-label={alt}
          title={alt}
          onClick={handleSaveDeleteClick}
        >
          <img
            className="movie__save-icon"
            src={canDelete ? deleteIcon : liked ? savedIcon : notSavedIcon}
            alt={alt}
          />
        </button>
      </div>
      <div className="movie__image-container">
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="movie__image"
            src={MOVIE_URL_PREFIX + movie.image.url}
            alt="Заставка к фильму"
          />
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
