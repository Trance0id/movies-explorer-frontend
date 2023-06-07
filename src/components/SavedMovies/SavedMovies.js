import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import useMovies from '../../hooks/useMovies';

export default function SavedMovies() {
  const moviesHook = useMovies(true);
  // useEffect(() => {
  //   mainApi.getMovies().then(res => {
  //     setMovies(res);
  //   });
  // }, []);

  // useEffect(() => {
  //   setFilteredMovies(movies);
  // }, [movies]);

  // const onFormSubmit = ({ query, short }) => {
  //   setFilteredMovies(filterMovies(movies, { query, short }));
  // };

  // const filterMovies = (movies, { query, short }) =>
  //   movies.filter(
  //     movie =>
  //       (short ? movie.duration <= 40 : true) &&
  //       (query
  //         ? movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
  //           movie.nameEN.toLowerCase().includes(query.toLowerCase())
  //         : true)
  //   );
  // const onMovieDelete = movie => {
  //   mainApi
  //     .deleteMovie(movie._id)
  //     .then(() => {
  //       setMovies(prevSavedMovies => prevSavedMovies.filter(m => m.movieId !== movie.movieId));
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <main className='movies'>
      <SearchForm
        queryText={moviesHook.formData.query}
        shortState={moviesHook.formData.short}
        onFormSubmit={moviesHook.onMoviesSearch}
      />
      <MoviesCardList
        movies={moviesHook.filteredMovies}
        like={false}
        more={false}
        onCaptionClick={moviesHook.onCaptionClick}
      />
    </main>
  );
}
