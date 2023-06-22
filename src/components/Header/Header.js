import logo from '../../images/logo/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';

export default function Header({ loggedIn }) {
  const navigate = useNavigate();
  const navigateLanding = () => {
    navigate('/');
  };
  return (
    <header className='header'>
      <img
        src={logo}
        alt='Поиск фильмов'
        className='interactive header__logo'
        onClick={navigateLanding}
      />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
