import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import cardLink from '../../images/movieImg.png';

export default function SavedMovies() {
  const movies = [
    {
      id: 1,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 2,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 3,
      name: 'Бег - это свобода',
      link: cardLink,
    },
    {
      id: 4,
      name: 'Бег - это свобода',
      link: cardLink,
      active: true,
    },
    {
      id: 5,
      name: 'Бег - это свобода',
      link: cardLink,
    }
  ]

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} like={false} more={false}/>
    </main>
  );
}
