import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>
        Портфолио
      </h2>
      <ul className='list portfolio__items'>
        <li className='portfolio__item'>
          <Link to='https://trance0id.github.io/how-to-learn/'
            className='interactive link portfolio__link'
            target='_blank'>
            <h3 className='portfolio__item-title'>
              Статичный сайт
            </h3>
            <span className='portfolio__item-button'>
              &rarr;
            </span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='https://trance0id.github.io/start-adaptive-VasnevD/'
            className='interactive link portfolio__link'
            target='_blank'>
            <h3 className='portfolio__item-title'>
              Адаптивный сайт
            </h3>
            <span className='portfolio__item-button'>
              &rarr;
            </span>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='https://mesto.trance0id.nomoredomains.monster/'
            className='interactive link portfolio__link'
            target='_blank'>
            <h3 className='portfolio__item-title'>
              Одностраничное приложение
            </h3>
            <span className='portfolio__item-button'>
              &rarr;
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
