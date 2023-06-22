import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';
import useScreen from '../../hooks/useScreen';
import ErrorMessage from './ErrorMessage';
import NothingFound from './NothingFound';

export default function MoviesCardList({
  movies,
  like,
  more,
  showPreloader,
  onCaptionClick,
  savedMoviesIds,
  isSearchDone,
  errorText,
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
      <Preloader preloader={showPreloader} />
      {isSearchDone && errorText && <ErrorMessage errorText={errorText} />}
      {isSearchDone && !errorText && !showingMovies.length && <NothingFound />}

      <ul className='movies__list'>
        {showingMovies?.map(movie => (
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
