import './Movies.css';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';

export default function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}
