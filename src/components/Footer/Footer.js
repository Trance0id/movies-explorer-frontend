import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
    return (
      <footer className='footer'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <section className='footer__credits' aria-label='Информация о странице'>
          <div className='footer__year'>
            &copy; {new Date().getFullYear()}
          </div>
          <nav className='footer__contacts'>
                <Link to='https://practicum.yandex.ru/'
                  className='interactive link footer__link'
                  target='_blank'>
                    Яндекс.Практикум
                </Link>
                <Link to='https://github.com/Trance0id'
                  className='interactive link footer__link'
                  target='_blank'>
                    Github
                </Link>
          </nav>
        </section>
      </footer>
    );
}
