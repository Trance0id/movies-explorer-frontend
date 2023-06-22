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
        onShortChange={moviesHook.onShortChange}
      />
      <MoviesCardList
        movies={moviesHook.filteredMovies}
        like={true}
        more={true}
        showPreloader={moviesHook.showPreloader}
        onCaptionClick={moviesHook.onCaptionClick}
        savedMoviesIds={moviesHook.userSavedMoviesIds}
        isSearchDone={moviesHook.searchDone}
        errorText={moviesHook.errorText}
      />
    </main>
  );
}
