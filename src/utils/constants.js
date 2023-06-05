const REGISTER_PAGE_DATA = {
  hasNameField: true,
  heading: 'Добро пожаловать!',
  formName: 'register',
  submitText: 'Зарегистрироваться',
  submitCaptionText: 'Уже зарегистрированы?',
  linkText: 'Войти',
  linkUrl: '/signin',
};

const LOGIN_PAGE_DATA = {
  hasNameField: false,
  heading: 'Рады видеть!',
  formName: 'login',
  submitText: 'Войти',
  submitCaptionText: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  linkUrl: '/signup',
};

const URL_MOVIES_API = 'https://api.nomoreparties.co';
const URL_MAIN_API = 'https://movies-explorer.trance0id.nomoredomains.monster/api';

export { REGISTER_PAGE_DATA, LOGIN_PAGE_DATA, URL_MOVIES_API, URL_MAIN_API };
