import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg';


export default function Navigation() {
  const path = useLocation().pathname;
  return path === '/' ? (
    <nav className="navigation__auth">
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
      <label className='interactive button navigation__burger' for='burger' />
      <div className="navigation__wrapper">
        <nav className='navigation__films'>
          <NavLink to='/' className='link navigation__link navigation__link_type_movies navigation__link_type_home'>
            Главная
          </NavLink>
          <NavLink to='/movies' className={( { isActive } ) =>
            `link navigation__link navigation__link_type_movies ${isActive && 'navigation__link_type_active'}`}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className={( { isActive } ) =>
            `link navigation__link navigation__link_type_movies ${isActive && 'navigation__link_type_active'}`}>
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to='/profile' className='link navigation__link navigation__link_type_profile'>
          Аккаунт
          <img src={iconProfile} alt='Профиль' className='navigation__link-icon' />
        </Link>
      </div>
    </div>
  )
}
