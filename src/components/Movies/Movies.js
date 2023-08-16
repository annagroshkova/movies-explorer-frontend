import React, {useEffect, useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import useBreakpoint from "../../hooks/useBreakpoint";

/**
 * @typedef {import("../../types").Movie} Movie
 * @typedef {import("../../types").SearchParams} SearchParams
 * @typedef {import("../../types").Breakpoints} Breakpoints
 */

/**
 * @param {Breakpoints} b
 * @returns {number} rows
 */
const rowsByBreakpoint = {
  desktop: 2,
  tablet: 2,
  mobile: 1,
}

const colsByBreakpoint = {
  desktop: 4,
  tablet: 4,
  mobile: 1,
}

/**
 * @param {Movie[]} props.movies
 * @param {SearchParams} props.searchParams
 */
export default function Movies(props) {
  const { movies, searchParams } = props

  const [rows, setRows] = useState(1)
  const breakpoint = useBreakpoint()

  /**
   * @returns {Movie[]}
   */
  function filteredMovies() {
    const text = searchParams.text.toLowerCase()
    if (!text) return []

    return movies.filter((movie) => {
      if (searchParams.shorts && movie.duration > 40) return false
      if (!movie.nameRU.toLowerCase().includes(text)) return false
      return true;
    }).slice(0, movieCount())
  }

  function movieCount() {
    // return rows * colsByBreakpoint[breakpoint]
    return 500
  }

  function handleMore() {
    setRows(rows => rows + rowsByBreakpoint[breakpoint])
  }

  return (
    <section className="movies">
      <div className="movies__cards">
        {breakpoint}
        {filteredMovies().map((movie) => (
          <MovieCard movie={movie} key={movie.id} canDelete={false} />
        ))}
      </div>
      <div className="movies__button-container">
        <button className="movies__load-more-btn" type="button" aria-label="Загрузить ещё"
          onClick={handleMore}>
          Ещё
        </button>
      </div>
    </section>
  );
}
