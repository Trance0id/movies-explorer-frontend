import { URL_MAIN_API } from './constants';

const API_CONFIG = {
  baseUrl: URL_MAIN_API,
  headers: {},
};

class Api {
  _baseUrl;
  _headers;

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _callFetch(endpoint, method, body, contentType) {
    const headers = this._headers;
    headers['Content-Type'] = contentType;

    return fetch(this._baseUrl + endpoint, {
      credentials: 'include',
      method,
      headers,
      body: JSON.stringify(body),
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка! Статус: ${res.status}`);
      }
    });
  }

  getUserInfo() {
    return this._callFetch('/users/me');
  }

  setUserInfo(body) {
    return this._callFetch('/users/me', 'PATCH', body, 'application/json');
  }

  getMovies() {
    return this._callFetch('/movies');
  }

  addMovie(body) {
    return this._callFetch('/movies', 'POST', body, 'application/json');
  }

  deleteMovie(movieId) {
    return this._callFetch(`/movies/${movieId}`, 'DELETE');
  }

  register(body) {
    return this._callFetch('/signup', 'POST', body, 'application/json');
  }

  login(body) {
    return this._callFetch('/signin', 'POST', body, 'application/json');
  }

  logout() {
    return this._callFetch('/signout');
  }
}

const api = new Api(API_CONFIG);

export default api;
