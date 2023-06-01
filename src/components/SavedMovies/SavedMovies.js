import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import cardLink from '../../images/movieImg.png';

export default function SavedMovies({ movies, onFormSubmit, preloader }) {
  return (
    <main className='movies'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <MoviesCardList movies={movies} like={false} more={false} />
    </main>
  );
}
