import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigation() {
    return (
      <nav className="navigation">
        <Link className='navigation__link'>
          Регистрация
        </Link>

        <Link className='navigation__link navigation__link_login'>
          Войти
        </Link>
      </nav>
    );
}
