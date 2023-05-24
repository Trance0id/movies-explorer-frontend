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
          <Link to='' className='link portfolio__link'>
            <h3 className='portfolio__item-title'>
              Статичный сайт
            </h3>
            <button className='button portfolio__item-button'>
              &rarr;
            </button>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='' className='link portfolio__link'>
            <h3 className='portfolio__item-title'>
              Адаптивный сайт
            </h3>
            <button className='button portfolio__item-button'>
              &rarr;
            </button>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='' className='link portfolio__link'>
            <h3 className='portfolio__item-title'>
              Одностраничное приложение
            </h3>
            <button className='button portfolio__item-button'>
              &rarr;
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
