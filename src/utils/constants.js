const REGISTER_PAGE_DATA = {
  hasNameField: true,
  heading: 'Добро пожаловать!',
  submitText: 'Зарегистрироваться',
  submitCaptionText: 'Уже зарегистрированы?',
  linkText: 'Войти',
  linkUrl: '/signin',
}

const LOGIN_PAGE_DATA = {
  hasNameField: false,
  heading: 'Рады видеть!',
  submitText: 'Войти',
  submitCaptionText: 'Ещё не зарегистрированы?',
  linkText: 'Регистрация',
  linkUrl: '/signup',
}

export { REGISTER_PAGE_DATA, LOGIN_PAGE_DATA };
