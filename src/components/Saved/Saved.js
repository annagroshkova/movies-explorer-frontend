import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Saved.css';
import { moviesApi } from '../../utils/MoviesApi';

export default function Saved() {
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
      <main className="saved">
        <SearchBar onChange={handleSearchParamsChange} persist={false} />
        <Movies movies={movies} searchParams={searchParams} canDelete={true} />
        <Footer />
      </main>
    </>
  );
}
