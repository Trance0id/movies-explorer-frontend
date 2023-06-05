import './Movies.css';
import { useEffect } from 'react';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';

export default function Movies({ data, onFormSubmit, preloader, onCaptionClick }) {
  const { query, short, movies } = data;
  return (
    <main className='movies'>
      <SearchForm queryText={query || ''} shortState={short || false} onFormSubmit={onFormSubmit} />
      <MoviesCardList
        movies={movies}
        like={true}
        more={false}
        preloader={preloader}
        onCaptionClick={onCaptionClick}
      />
    </main>
  );
}
