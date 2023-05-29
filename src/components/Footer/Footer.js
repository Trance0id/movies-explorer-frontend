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
                <Link to='https://practicum.yandex.ru/'
                  className='link footer__link'
                  target='_blank'>
                    Яндекс.Практикум
                </Link>
              </li>
              <li>
                <Link to='https://github.com/Trance0id'
                  className='link footer__link'
                  target='_blank'>
                    Github
                </Link>
              </li>
            </ul>
          </address>
        </p>
      </footer>
    );
}
