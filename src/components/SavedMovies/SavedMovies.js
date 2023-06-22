import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import useMovies from '../../hooks/useMovies';

export default function SavedMovies() {
  const moviesHook = useMovies(true);

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
        like={false}
        more={false}
        onCaptionClick={moviesHook.onCaptionClick}
        isSearchDone={moviesHook.searchDone}
        errorText={moviesHook.errorText}
      />
    </main>
  );
}
