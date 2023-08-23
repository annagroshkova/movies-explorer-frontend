import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import useMovieBreakpoint from '../../hooks/useMovieBreakpoint';
import { ROWS_BY_COLUMNS, SHORT_MOVIE_DURATION } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

/**
 * @typedef {import("../../types").BeatMovie} Movie
 * @typedef {import("../../types").ApiMovie} ApiMovie
 * @typedef {import("../../types").SearchParams} SearchParams
 * @typedef {import("../../types").Breakpoints} Breakpoints
 */

/**
 * @param {BeatMovie[]} props.movies
 * @param {number[]} props.likedMovies
 * @param {SearchParams} props.searchParams
 * @param {boolean} props.hasSearched
 * @param {'all' | 'saved'} props.mode
 * @param {boolean} props.isLoading
 * @param {(input: any) => any} props.onLike
 * @param {(input: any) => any} props.onUnlike
 */
export default function Movies(props) {
  const { movies, likedMovies, searchParams, mode, isLoading, onLike, onUnlike } = props;
  const isSavedMode = mode === 'saved';

  const [rows, setRows] = useState(4);
  const columns = useMovieBreakpoint();

  /**
   * @returns {Movie[]}
   */
  function filteredMovies() {
    const text = searchParams.text.toLowerCase();
    const allMovies = isSavedMode ? movies.filter((m) => likedMovies.includes(m.id)) : movies;

    if (!text && !isSavedMode) return [];

    return allMovies.filter((movie) => {
      if (searchParams.shorts && movie.duration > SHORT_MOVIE_DURATION) return false;
      if (
        text &&
        !movie.nameRU.toLowerCase().includes(text) &&
        !movie.nameEN.toLowerCase().includes(text)
      )
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

  return (
    <section className="movies">
      <div className="movies__cards">
        {isLoading && <Preloader />}
        {!filteredLimitedMovies().length && (searchParams.text || mode === 'saved') && (
          <p>Ничего не найдено</p>
        )}
        {filteredLimitedMovies().map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            liked={likedMovies.includes(movie.id)}
            canDelete={isSavedMode}
            onLike={onLike}
            onUnlike={onUnlike}
          />
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
