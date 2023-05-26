import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
            <NavLink to='/movies' className={
              ({ isActive }) =>
            `link navigation__link ${isActive && 'navigation__link_active'}`
            }>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={
              ({ isActive }) =>
            `link navigation__link ${isActive && 'navigation__link_active'}`
            }>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink to='/profile' className={
            ({ isActive }) =>
          `link navigation__link ${isActive && 'navigation__link_active'}`
          }>
            Аккаунт
            <img src={iconProfile} alt='Профиль' className='navigation__link-icon' />
          </NavLink>
        </div>
      )

}
