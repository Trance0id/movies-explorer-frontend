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
    },
    {
      id: 15,
      name: 'Бег - это свобода',
      link: cardLink,
    }
  ]

  return (
    <section aria-label="Избранные фильмы">
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </ul>
    </section>
  );
}
