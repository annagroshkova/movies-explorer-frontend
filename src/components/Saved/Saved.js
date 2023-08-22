import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Saved.css';
import { moviesApi } from '../../utils/MoviesApi';

/**
 * @typedef {import("../../types").BeatMovie} BeatMovie
 * @typedef {import("../../types").ApiMovie} ApiMovie
 * @typedef {import("../../types").SearchParams} SearchParams
 */

/**
 * @param {BeatMovie[]} props.movies
 * @param {number[]} props.likedMovies
 * @param {(movieId: number) => any} props.onUnlike
 * @param {() => any} props.onLoadMovies
 */
export default function Saved(props) {
  const { movies, likedMovies, onUnlike, onLoadMovies } = props;

  const [searchParams, setSearchParams] = useState(
    /** @type {SearchParams} */
    {
      text: '',
      shorts: false,
    },
  );

  function handleSearchParamsChange(params) {
    setSearchParams(params);

    if (!movies.length) {
      onLoadMovies();
    }
  }

  return (
    <>
      <Header />
      <main className="saved">
        <SearchBar onChange={handleSearchParamsChange} persist={false} />
        <Movies
          movies={movies}
          likedMovies={likedMovies}
          searchParams={searchParams}
          mode="saved"
          onUnlike={onUnlike}
        />
        <Footer />
      </main>
    </>
  );
}
