class MoviesApi {
  /**
   * @param {{ baseUrl: string; headers: HeadersInit}} options
   */
  constructor(options) {
    this._options = options;
  }

  /**
   * @param res {Response}
   * @returns {Promise<any>}
   */
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  /**
   * @param url {string}
   * @param options {RequestInit}
   * @returns {Promise<any>}
   */
  _request(url, options = {}) {
    return fetch(`${this._options.baseUrl}/${url}`, {
      headers: {
        ...this._options.headers,
      },
      ...options,
    }).then(this._checkResponse);
  }

  /**
   * @returns {Promise<import("../types").GetMoviesResponse>}
   */
  getMovies() {
    return this._request(``);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
