import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__heading'>
        Портфолио
      </h2>
      <ul className='portfolio__items'>
        <li className='portfolio__item'>
          <h3 className='portfolio__item-title'>
            Статичный сайт
          </h3>
          <button className='portfolio__item-button'>
            &rarr;
          </button>
        </li>
        <li className='portfolio__item'>
          <h3 className='portfolio__item-title'>
            Адаптивный сайт
          </h3>
          <button className='portfolio__item-button'>
            &rarr;
          </button>
        </li>
        <li className='portfolio__item'>
          <h3 className='portfolio__item-title'>
            Одностраничное приложение
          </h3>
          <button className='portfolio__item-button'>
            &rarr;
          </button>
        </li>
      </ul>
    </section>
  );
}
