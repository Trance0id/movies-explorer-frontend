import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
    return (
      <footer className='footer'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className='footer__credits'>
          <time className='footer__year'>
            &copy; {new Date().getFullYear()}
          </time>
          <address>
            <ul className='footer__contacts'>
              <li>
                <Link to='' className='footer__link'>Яндекс.Практикум</Link>
              </li>
              <li>
                <Link to='' className='footer__link'>Github</Link>
              </li>
            </ul>
          </address>
        </p>
      </footer>
    );
}
