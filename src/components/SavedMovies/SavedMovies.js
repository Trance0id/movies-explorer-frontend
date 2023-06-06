import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';

export default function SavedMovies({
  movies,
  onFormSubmit,
  preloader,
  onCaptionClick,
  savedMoviesIds,
}) {
  return (
    <main className='movies'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <MoviesCardList
        movies={movies}
        savedMoviesIds={savedMoviesIds}
        like={false}
        more={false}
        onCaptionClick={onCaptionClick}
      />
    </main>
  );
}
