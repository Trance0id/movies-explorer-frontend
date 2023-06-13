import './Movies.css';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import useMovies from '../../hooks/useMovies';

export default function Movies() {
  const moviesHook = useMovies();

  return (
    <main className='movies'>
      <SearchForm
        queryText={moviesHook.formData.query}
        shortState={moviesHook.formData.short}
        onFormSubmit={moviesHook.onMoviesSearch}
      />
      <MoviesCardList
        movies={moviesHook.filteredMovies}
        like={true}
        more={true}
        preloader={moviesHook.showPreloader}
        onCaptionClick={moviesHook.onCaptionClick}
        savedMoviesIds={moviesHook.userSavedMoviesIds}
      />
    </main>
  );
}
