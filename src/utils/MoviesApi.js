import { URL_MOVIES_API } from './constants';

const getFilms = () => {
  return fetch(`${URL_MOVIES_API}/beatfilm-movies`).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз Статус: ${res.status}`
      );
    }
  });
};

export default getFilms;
