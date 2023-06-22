import './Navigation.css';
import { useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg';

export default function Navigation({ loggedIn }) {
  const menuState = useRef(null);

  const onNavigationClick = e => {
    menuState.current.checked = false;
  };
  return !loggedIn ? (
    <nav className='navigation navigation_logged-out'>
      <Link to='/signup' className='link interactive navigation__link'>
        Регистрация
      </Link>
      <Link to='/signin' className='link interactive navigation__link navigation__link_theme_dark'>
        Войти
      </Link>
    </nav>
  ) : (
    <div className='navigation'>
      <input type='checkbox' className='navigation__burger-state' id='burger' ref={menuState} />
      <label className='interactive button navigation__burger' htmlFor='burger' />
      <nav className='navigation__wrapper'>
        <div className='navigation__films'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `interactive link navigation__link navigation__link_type_movies
            navigation__link_type_home ${isActive && 'navigation__link_type_active'}`
            }
            onClick={onNavigationClick}
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `interactive link navigation__link navigation__link_type_movies ${
                isActive && 'navigation__link_type_active'
              }`
            }
            onClick={onNavigationClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `interactive link navigation__link navigation__link_type_movies ${
                isActive && 'navigation__link_type_active'
              }`
            }
            onClick={onNavigationClick}
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `interactive link navigation__link navigation__link_type_profile ${
              isActive && 'navigation__link_type_active'
            }`
          }
          onClick={onNavigationClick}
        >
          Аккаунт
          <img src={iconProfile} alt='Профиль' className='navigation__link-icon' />
        </NavLink>
      </nav>
    </div>
  );
}
