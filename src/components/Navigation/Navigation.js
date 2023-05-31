import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg';


export default function Navigation() {
  const path = useLocation().pathname;
  return path === '/' ? (
    <nav className="navigation navigation_logged-out">
      <Link to='/signup' className='link interactive navigation__link'>
        Регистрация
      </Link>
      <Link to='/signin' className='link interactive navigation__link navigation__link_theme_dark'>
        Войти
      </Link>
    </nav>
  ) : (path === '/movies' || path === '/saved-movies' || path === '/profile') && (
    <div className='navigation'>
      <input type='checkbox' className='navigation__burger-state' id='burger' />
      <label className='interactive button navigation__burger' htmlFor='burger' />
      <nav className="navigation__wrapper">
        <div className='navigation__films'>
          <NavLink to='/' className='interactive link navigation__link navigation__link_type_movies navigation__link_type_home'>
            Главная
          </NavLink>
          <NavLink to='/movies' className={( { isActive } ) =>
            `interactive link navigation__link navigation__link_type_movies ${isActive && 'navigation__link_type_active'}`}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className={( { isActive } ) =>
            `interactive link navigation__link navigation__link_type_movies ${isActive && 'navigation__link_type_active'}`}>
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink to='/profile' className={( { isActive } ) =>
            `link navigation__link navigation__link_type_profile ${isActive && 'navigation__link_type_active'}`}>
          Аккаунт
          <img src={iconProfile} alt='Профиль' className='navigation__link-icon' />
        </NavLink>
      </nav>
    </div>
  )
}
