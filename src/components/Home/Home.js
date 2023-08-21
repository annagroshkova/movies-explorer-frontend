import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Home.css';
import { moviesApi } from '../../utils/MoviesApi';

/**
 * @typedef {import("../../types").BeatMovie} Movie
 * @typedef {import("../../types").SearchParams} SearchParams
 */

export default function Home() {
  const [movies, setMovies] = useState(/** @type {Movie[]} */ []);
  const [searchParams, setSearchParams] = useState(
    /** @type {SearchParams} */
    {
      text: '',
      shorts: false,
    },
  );

  function handleSearchParamsChange(params) {
    setSearchParams(params);
  }

  useEffect(() => {
    async function fetchMovies() {
      setMovies(await moviesApi.getMovies());
    }

    void fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <main className="home">
        <SearchBar onChange={handleSearchParamsChange} persist={true} />
        <Movies movies={movies} searchParams={searchParams} canDelete={false} />
      </main>
      <Footer />
    </>
  );
}
