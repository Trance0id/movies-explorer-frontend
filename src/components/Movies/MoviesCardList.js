import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';
import useScreen from '../../hooks/useScreen';

export default function MoviesCardList({
  movies,
  like,
  more,
  preloader,
  onCaptionClick,
  savedMoviesIds,
}) {
  const [showMore, setShowMore] = useState(false);
  const [showingMovies, setShowingMovies] = useState([]);
  const screen = useScreen(more);

  useEffect(() => {
    setShowingMovies(movies.slice(0, screen.startMovies));
    setShowMore(movies.length > showingMovies.length);
  }, [movies]);

  useEffect(() => {
    setShowMore(movies.length > showingMovies.length);
  }, [showingMovies]);

  const onMoreClick = () => {
    setShowingMovies(prev => [
      ...prev,
      ...movies.slice(prev.length, prev.length + screen.moreMovies),
    ]);
  };

  return (
    <section className='movies__section' aria-label='Фильмы'>
      <Preloader preloader={preloader} />
      <ul className='movies__list'>
        {!!showingMovies &&
          showingMovies.map(movie => (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              like={like}
              onCaptionClick={onCaptionClick}
              savedMoviesIds={savedMoviesIds}
            />
          ))}
      </ul>
      {more && showMore && (
        <div className='movies__more'>
          <button
            type='button'
            className='interactive button movies__more-button'
            onClick={onMoreClick}
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}
