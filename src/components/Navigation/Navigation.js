import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigation() {
    return (
      <nav className="navigation">
        <Link className='link navigation__link'>
          Регистрация
        </Link>

        <Link className='link navigation__link navigation__link_login'>
          Войти
        </Link>
      </nav>
    );
}
