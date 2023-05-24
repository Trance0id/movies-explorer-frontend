import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import cardLink from '../../images/movieImg.png'

export default function MoviesCardList() {
  const movies = [
    {
      id: 1,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 2,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 3,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 4,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 5,
      name: 'Бег - это свобода',
      link: cardLink,
},
    {
      id: 6,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 7,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 8,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 9,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 10,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 11,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 12,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 13,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 14,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    }
  ]

  return (
    <section aria-label="Избранные фильмы">
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
      <div className='movies__more'>
        <button className='button movies__more-button'>
          Ещё
        </button>
      </div>
    </section>
  );
}
