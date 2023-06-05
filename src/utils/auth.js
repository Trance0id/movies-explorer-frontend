import { URL_MAIN_API } from './constants';

export const register = (formData) => {
  return fetch(`${URL_MAIN_API}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка регистрации! Статус: ${res.status}`);
    }
  });
};

export const authorize = (formData) => {
  return fetch(`${URL_MAIN_API}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка авторизации! Статус: ${res.status}`);
    }
  });
};

export const logout = () => {
  return fetch(`${URL_MAIN_API}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка выхода из системы! Статус: ${res.status}`);
    }
  });
};

export const checkAuth = () => {
  return fetch(`${URL_MAIN_API}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка проверки токена! Статус: ${res.status}`);
    }
  });
};
