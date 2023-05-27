import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg';


export default function Navigation() {
  const path = useLocation().pathname;
    return path === '/' ? (
        <nav className="navigation__auth">
          <Link to='/signup' className='link navigation__link'>
            Регистрация
          </Link>
          <Link to='/signin' className='link navigation__link navigation__link_theme_dark'>
            Войти
          </Link>
        </nav>
      ) : (path === '/movies' || path === '/saved-movies' || path === '/profile') &&
      (
        <div className='navigation'>
          <nav className="navigation__films">
            <Link to='/movies' className='link navigation__link navigation__link_type_movies'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='link navigation__link navigation__link_type_movies'>
              Сохранённые фильмы
            </Link>
          </nav>
          <Link to='/profile' className='link navigation__link navigation__link_type_profile'>
            Аккаунт
            <img src={iconProfile} alt='Профиль' className='navigation__link-icon' />
          </Link>
        </div>
      )

}
