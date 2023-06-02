import './Movies.css';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import cardLink from '../../images/movieImg.png';

export default function Movies({ data, onFormSubmit, preloader }) {
  const { query, short, movies } = data;
  return (
    <main className='movies'>
      <SearchForm queryText={query} shortState={short} onFormSubmit={onFormSubmit} />
      <MoviesCardList movies={movies} like={true} more={false} preloader={preloader} />
    </main>
  );
}
