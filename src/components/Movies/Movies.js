import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import useMovieBreakpoint from '../../hooks/useMovieBreakpoint';
import { MOVIE_URL_PREFIX, ROWS_BY_COLUMNS, SHORT_MOVIE_DURATION } from '../../utils/constants';
import { mainApi } from '../../utils/MainApi';

/**
 * @typedef {import("../../types").BeatMovie} Movie
 * @typedef {import("../../types").ApiMovie} ApiMovie
 * @typedef {import("../../types").SearchParams} SearchParams
 * @typedef {import("../../types").Breakpoints} Breakpoints
 */

/**
 * @param {BeatMovie[]} props.movies
 * @param {SearchParams} props.searchParams
 */
export default function Movies(props) {
  const { movies, searchParams } = props;

  const [rows, setRows] = useState(4);
  const columns = useMovieBreakpoint();

  /**
   * @returns {Movie[]}
   */
  function filteredMovies() {
    const text = searchParams.text.toLowerCase();
    if (!text) return [];

    return movies.filter((movie) => {
      if (searchParams.shorts && movie.duration > SHORT_MOVIE_DURATION) return false;
      if (!movie.nameRU.toLowerCase().includes(text) && !movie.nameEN.toLowerCase().includes(text))
        return false;
      return true;
    });
  }

  function filteredLimitedMovies() {
    return filteredMovies().slice(0, movieCount());
  }

  function movieCount() {
    return rows * columns;
  }

  function moreButtonVisible() {
    return movieCount() < filteredMovies().length;
  }

  function handleMore() {
    setRows((rows) => rows + ROWS_BY_COLUMNS[columns]);
  }

  async function handleLike(movie) {
    const { country, director, year, description, duration, nameEN, nameRU } = movie;

    const thumbnail = MOVIE_URL_PREFIX + (movie.image.formats.thumbnail?.url || movie.image.url);

    await mainApi.likeMovie(
      /** @type {ApiMovie} */ {
        country,
        director,
        duration,
        year,
        description,
        nameRU,
        nameEN,
        movieId: movie.id,
        image: MOVIE_URL_PREFIX + movie.image.url,
        trailerLink: movie.trailerLink.split('?')[0], // todo
        thumbnail,
      },
    );
  }

  return (
    <section className="movies">
      <div className="movies__cards">
        {!filteredLimitedMovies().length && <p>Ничего не найдено</p>}
        {filteredLimitedMovies().map((movie) => (
          <MovieCard movie={movie} key={movie.id} canDelete={false} onLike={handleLike} />
        ))}
      </div>

      {moreButtonVisible() && (
        <div className="movies__button-container">
          <button
            className="movies__load-more-btn"
            type="button"
            aria-label="Загрузить ещё"
            onClick={handleMore}
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}
