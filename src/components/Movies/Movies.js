import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import useMovieBreakpoint from '../../hooks/useMovieBreakpoint';

/**
 * @typedef {import("../../types").Movie} Movie
 * @typedef {import("../../types").SearchParams} SearchParams
 * @typedef {import("../../types").Breakpoints} Breakpoints
 */

/**
 * @param {number} columns
 * @returns {number} rows
 */
const rowsByColumns = {
  3: 1,
  2: 1,
  1: 2,
};

/**
 * @param {Movie[]} props.movies
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
      if (searchParams.shorts && movie.duration > 40) return false;
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
    setRows((rows) => rows + rowsByColumns[columns]);
  }

  return (
    <section className="movies">
      <div className="movies__cards">
        {!filteredLimitedMovies().length && <p>Ничего не найдено</p>}
        {filteredLimitedMovies().map((movie) => (
          <MovieCard movie={movie} key={movie.id} canDelete={false} />
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
