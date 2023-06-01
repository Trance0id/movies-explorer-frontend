import './Movies.css';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import cardLink from '../../images/movieImg.png';

export default function Movies({ movies, onFormSubmit, preloader }) {
  return (
    <main className='movies'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <MoviesCardList movies={movies} like={true} more={true} preloader={preloader} />
    </main>
  );
}
