import { mainApi } from './MainApi';
import { moviesApi } from './MoviesApi';

/**
 * @typedef {import("../types").BeatMovie} BeatMovie
 * @typedef {import("../types").ApiMovie} ApiMovie
 * @typedef {import("../types").SearchParams} SearchParams
 */

class State {
  /** @type {ApiMovie[] | null} */
  _likedMovies = null;

  /** @type {BeatMovie[] | null} */
  _beatMovies = null;

  /**
   * @return {Promise<BeatMovie[]>}
   */
  async getMovies() {
    if (!this._beatMovies) {
      this._beatMovies = await moviesApi.getMovies();
    }
    return this._beatMovies;
  }

  /**
   * @param {any} input
   * @returns {Promise<ApiMovie[]>}
   */
  async likeMovie(input) {
    const newMovie = await mainApi.likeMovie(input);
    this._likedMovies.push(newMovie);
    return this._likedMovies;
  }

  /**
   * @param {number} movieId
   * @returns {Promise<ApiMovie[]>}
   */
  async unlikeMovie(movieId) {
    const movieIdString = this._likedMovies.find((m) => m.movieId === movieId)?._id;
    if (!movieIdString) return this._likedMovies; // not found
    await mainApi.unlikeMovie(movieIdString);
    this._likedMovies = this._likedMovies.filter((m) => m._id !== movieIdString);
    return this._likedMovies;
  }

  /**
   * @returns {Promise<ApiMovie[]>}
   */
  async getLikedMovies() {
    if (!this._likedMovies) {
      this._likedMovies = await mainApi.getLikedMovies();
    }

    return this._likedMovies;
  }
}

export const state = new State();
