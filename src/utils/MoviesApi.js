const queryFilms = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка! Статус: ${res.status}`);
    }
  });
};

export default queryFilms;
