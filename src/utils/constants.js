const REGISTER_PAGE_DATA = {
  hasNameField: true,
  heading: 'Добро пожаловать!',
  formName: 'register',
  submitText: 'Зарегистрироваться',
  submitCaptionText: 'Уже зарегистрированы?',
  linkText: 'Войти',
  linkUrl: '/signin',
  errorMsg: 'При регистрации произошла ошибка.',
};

const LOGIN_PAGE_DATA = {
  hasNameField: false,
  heading: 'Рады видеть!',
  formName: 'login',
  submitText: 'Войти',
  submitCaptionText: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  linkUrl: '/signup',
  errorMsg: 'При авторизации произошла ошибка.',
};

const URL_MOVIES_API = 'https://api.nomoreparties.co';
const URL_MAIN_API = 'https://movies-explorer.trance0id.nomoredomains.monster/api';

const SHORT_MOVIES_LENGTH = 40;

const MOVIES_AMOUNT = {
  large: { start: 12, add: 3 },
  medium: { start: 8, add: 2 },
  small: { start: 5, add: 2 },
};

export {
  REGISTER_PAGE_DATA,
  LOGIN_PAGE_DATA,
  URL_MOVIES_API,
  URL_MAIN_API,
  SHORT_MOVIES_LENGTH,
  MOVIES_AMOUNT,
};
