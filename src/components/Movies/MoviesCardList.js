import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList( { movies, like, more }) {

  return (
    <section className='movies__section' aria-label="Фильмы">
      <Preloader />
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            like={like}
          />
        ))}
      </ul>
      {more && <div className='movies__more'>
        <button className='button movies__more-button'>
          Ещё
        </button>
      </div>}
    </section>
  );
}
