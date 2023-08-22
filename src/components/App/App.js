import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import './App.css';
import Saved from '../Saved/Saved';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getToken, removeToken } from '../../utils/storage';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { state } from '../../utils/state';
import { MOVIE_URL_PREFIX } from '../../utils/constants';

/**
 * @typedef {import("../../types").CurrentUser} CurrentUser
 * @typedef {import("../../types").BeatMovie} BeatMovie
 * @typedef {import("../../types").ApiMovie} ApiMovie
 * @typedef {import("../../types").SearchParams} SearchParams
 */

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(/** @type {CurrentUser | null} */ null);
  const [token, setToken] = useState(/** @type {string | null} */ getToken());
  const [movies, setMovies] = useState(/** @type {BeatMovie[]} */ []);
  const [likedMovies, setLikedMovies] = useState(/** @type {number[]} */ []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void getMyInfo();
  }, []);

  async function getMyInfo() {
    if (!getToken()) return;

    try {
      const user = await mainApi.getMe();
      setCurrentUser(user);
      setToken(getToken());
    } catch (err) {
      console.error(err);
      // wrong token should redirect to /login page
      navigate('/login');
    }
  }

  function handleRegister(user) {
    setCurrentUser(user);
    setToken(getToken());
    navigate('/home');
  }

  async function handleLogin() {
    await getMyInfo();
    navigate('/home');
  }

  function handleLogout() {
    removeToken();
    setToken(null);
    localStorage.clear();
    navigate('/');
    setCurrentUser(null);
  }

  function handleProfileSave(user) {
    setCurrentUser(user);
  }

  async function handleLoadMovies() {
    try {
      setIsLoading(true);
      const [loadedMovies, loadedLikedMovies] = await Promise.all([
        state.getMovies(),
        state.getLikedMovies(),
      ]);

      setLikedMovies(loadedLikedMovies.map((m) => m.movieId));
      setMovies(loadedMovies);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * @param {BeatMovie} movie
   */
  async function handleLike(movie) {
    const { country, director, year, description, duration, nameEN, nameRU } = movie;

    const thumbnail = MOVIE_URL_PREFIX + (movie.image.formats.thumbnail?.url || movie.image.url);

    const newLikedMovies = await state.likeMovie(
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
        trailerLink: movie.trailerLink,
        thumbnail,
      },
    );
    setLikedMovies(newLikedMovies.map((m) => m.movieId));
    setMovies([...movies]);
  }

  /**
   * @param {number} movieId
   */
  async function handleUnlike(movieId) {
    const newLikedMovies = await state.unlikeMovie(movieId);
    setLikedMovies(newLikedMovies.map((m) => m.movieId));
    setMovies([...movies]);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                condition={!token}
                redirectPath="/home"
                element={Register}
                onRegister={handleRegister}
              />
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                condition={!token}
                redirectPath="/home"
                element={Login}
                onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                condition={token}
                element={Home}
                onLoadMovies={handleLoadMovies}
                onLike={handleLike}
                onUnlike={handleUnlike}
                isLoading={isLoading}
                movies={movies}
                likedMovies={likedMovies}
              />
            }
          />
          <Route
            path="/saved"
            element={
              <ProtectedRoute
                condition={token}
                element={Saved}
                onLoadMovies={handleLoadMovies}
                movies={movies}
                likedMovies={likedMovies}
                onUnlike={handleUnlike}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                condition={token}
                element={Profile}
                onLogout={handleLogout}
                onProfileSave={handleProfileSave}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}
