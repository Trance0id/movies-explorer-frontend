import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    mainApi.getMovies().then(res => {
      setMovies(res);
    });
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const onFormSubmit = ({ query, short }) => {
    setFilteredMovies(filterMovies(movies, { query, short }));
  };

  const filterMovies = (movies, { query, short }) =>
    movies.filter(
      movie =>
        (short ? movie.duration <= 40 : true) &&
        (query
          ? movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(query.toLowerCase())
          : true)
    );
  const onMovieDelete = movie => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setMovies(prevSavedMovies => prevSavedMovies.filter(m => m._id !== movie._id));
      })
      .catch(err => console.log(err));
  };

  return (
    <main className='movies'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <MoviesCardList
        movies={filteredMovies}
        like={false}
        more={false}
        onCaptionClick={onMovieDelete}
      />
    </main>
  );
}
