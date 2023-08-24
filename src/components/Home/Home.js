import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import './Home.css';

/**
 * @typedef {import("../../types").BeatMovie} BeatMovie
 * @typedef {import("../../types").SearchParams} SearchParams
 */

/**
 * @param {BeatMovie[]} props.movies
 * @param {number[]} props.likedMovies
 * @param {() => any} props.onLoadMovies
 * @param {(input: any) => any} props.onLike
 * @param {(movieId: number) => any} props.onUnlike
 * @param {boolean} props.isLoading
 */
export default function Home(props) {
  const { movies, likedMovies, isLoading, onLoadMovies, onLike, onUnlike } = props;

  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState(
    /** @type {SearchParams} */
    {
      text: '',
      shorts: false,
    },
  );

  function handleSearchParamsChange(params) {
    if (!hasSearched) setHasSearched(true);

    setSearchParams(params);

    if (!movies.length) {
      onLoadMovies();
    }
  }

  return (
    <>
      <Header />
      <main className="home">
        <SearchBar onChange={handleSearchParamsChange} persist={true} />
        <Movies
          movies={movies}
          likedMovies={likedMovies}
          searchParams={searchParams}
          mode="all"
          hasSearched={hasSearched}
          isLoading={isLoading}
          onLike={onLike}
          onUnlike={onUnlike}
        />
      </main>
      <Footer />
    </>
  );
}
