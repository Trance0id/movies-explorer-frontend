const getFilms = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
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
