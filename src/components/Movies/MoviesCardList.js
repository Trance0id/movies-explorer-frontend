import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ movies, like, more, preloader, onCaptionClick }) {
  return (
    <section className='movies__section' aria-label='Фильмы'>
      <Preloader preloader={preloader} />
      <ul className='movies__list'>
        {!!movies &&
          movies.map(movie => (
            <MoviesCard key={movie.id} movie={movie} like={like} onCaptionClick={onCaptionClick} />
          ))}
      </ul>
      {more && (
        <div className='movies__more'>
          <button type='button' className='interactive button movies__more-button'>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}
