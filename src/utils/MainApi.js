import { getToken } from './storage';

/**
 * @typedef {import("../types").BeatMovie} BeatMovie
 * @typedef {import("../types").ApiMovie} ApiMovie
 * @typedef {import("../types").User} User
 */

/** @type {ApiMovie[] | null} */
let likedMovies = null;

class MainApi {
  /**
   * @param {{ baseUrl: string; headers: HeadersInit}} _options
   */
  constructor(_options) {
    this._options = _options;
  }

  /**
   * @param res {Response}
   * @returns {Promise<any>}
   */
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  /**
   * @param url {string}
   * @param options {RequestInit}
   * @returns {Promise<any>}
   */
  _request(url, options = {}) {
    const token = getToken();

    return fetch(`${this._options.baseUrl}/${url}`, {
      headers: {
        ...this._options.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      ...options,
    }).then(this._checkResponse);
  }

  /**
   * @returns {ApiMovie[]}
   */
  async getLikedMovies() {
    if (!likedMovies) {
      likedMovies = await this._request(`movies`, {
        method: 'GET',
      });
    }

    return likedMovies;
  }

  /**
   * @param {number} id
   * @returns {void}
   */
  async unlikeMovie(id) {
    await this._request(`movies/${id}`, {
      method: 'DELETE',
    });
    likedMovies = likedMovies.filter((m) => m.movieId !== id);
  }

  /**
   * @param {any} input
   * @returns {void}
   */
  async likeMovie(input) {
    const newMovie = await this._request(`movies`, {
      method: 'POST',
      body: JSON.stringify(input),
    });
    likedMovies.push(newMovie);
  }

  /**
   * @returns {Promise<import("../types").User>}
   */
  getMe() {
    return this._request(`users/me`, {
      method: 'GET',
    });
  }

  /**
   * @param {import("../types").ProfileInput} input
   * @returns {User}
   */
  patchMe(input) {
    return this._request(`users/me`, {
      method: 'PATCH',
      body: JSON.stringify(input),
    });
  }

  /**
   * @param {import("../types").User} input
   * @returns {User}
   */
  signup(input) {
    return this._request(`signup`, {
      method: 'POST',
      body: JSON.stringify(input),
    });
  }

  /**
   * @param {import("../types").LoginInput} input
   * @returns {Promise<import("../types").LoginResponse>}
   */
  login(input) {
    return this._request(`signin`, {
      method: 'POST',
      body: JSON.stringify(input),
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.anna.nomoreparties.sbs',
  headers: {
    'Content-Type': 'application/json',
  },
});
