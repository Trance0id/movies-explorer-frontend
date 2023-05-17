import logo from '../../images/logo/logo.svg'
import './Header.css';
import Navigation from '../Navigation/Navigation';


export default function Header() {
    return (
        <header className="header">
        <img src={logo} alt="Логотип" className="header__logo" />
        <Navigation />
        </header>
    )
}
