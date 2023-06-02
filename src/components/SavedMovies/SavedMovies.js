import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';

export default function SavedMovies({ movies, onFormSubmit, preloader }) {
  return (
    <main className='movies'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <MoviesCardList movies={movies} like={false} more={false} />
    </main>
  );
}
