import './Movies.css';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { URL_MOVIES_API } from '../../utils/constants';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [userSavedMovies, setUserSavedMovies] = useState([]);
  const [userSavedMoviesIds, setUserSavedMoviesIds] = useState([]);
  const [formData, setFormData] = useState({ query: '', short: false });
  const [showPreloader, setShowPreloader] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const storeToLocalstorage = ({ movies, query, short }) => {
    localStorage.setItem('movies-short', JSON.stringify(short));
    localStorage.setItem('movies-query', JSON.stringify(query));
    localStorage.setItem('movies-movies', JSON.stringify(movies));
  };

  const getFromLocalstorage = () => {
    const moviesData = {};
    moviesData['short'] = JSON.parse(localStorage.getItem('movies-short'));
    moviesData['query'] = JSON.parse(localStorage.getItem('movies-query'));
    moviesData['movies'] = JSON.parse(localStorage.getItem('movies-movies'));
    return moviesData;
  };

  const onMoviesSearch = data => {
    setShowPreloader(true);
    setFormData(data);
    getMovies()
      .then(res => {
        const niceMovies = res.map(movie => ({
          ...movie,
          image: URL_MOVIES_API + movie.image.url,
          thumbnail: URL_MOVIES_API + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          id: undefined,
          created_at: undefined,
          updated_at: undefined,
        }));
        setMovies(niceMovies);
        setFilteredMovies(filterMovies(niceMovies, data));
        storeToLocalstorage({ movies: niceMovies, query: data.query, short: data.short });
      })
      .catch(err => console.log(err))
      .finally(() => setShowPreloader(false));
  };

  const likeMovie = movie => {
    mainApi.addMovie(movie).then(newMovie => {
      setUserSavedMovies(prevSavedMovies => [...prevSavedMovies, newMovie]);
      setUserSavedMoviesIds(prevIds => [...prevIds, newMovie.movieId]);
    });
  };

  const deleteMovie = movie => {
    const idToDelete = userSavedMovies.find(m => m.movieId === movie.movieId)._id;
    mainApi
      .deleteMovie(idToDelete)
      .then(() => {
        setUserSavedMovies(prevSavedMovies =>
          prevSavedMovies.filter(m => m.movieId !== movie.movieId)
        );
        setUserSavedMoviesIds(prevIds => prevIds.filter(id => id !== movie.movieId));
      })
      .catch(err => console.log(err));
  };

  const onMoviesLike = (movie, isLiked) => {
    !isLiked ? likeMovie(movie) : deleteMovie(movie);
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

  useEffect(() => {
    const initialState = getFromLocalstorage();
    setMovies(initialState.movies || []);
    setFormData({ query: initialState.query, short: initialState.short });
    mainApi.getMovies().then(res => {
      setUserSavedMovies(res);
      setUserSavedMoviesIds(res.map(m => m.movieId));
    });
  }, []);

  useEffect(() => {
    setFilteredMovies(filterMovies(movies, formData));
  }, [movies, formData]);

  return (
    <main className='movies'>
      <SearchForm
        queryText={formData.query}
        shortState={formData.short}
        onFormSubmit={onMoviesSearch}
      />
      <MoviesCardList
        movies={filteredMovies}
        like={true}
        more={showMore}
        preloader={showPreloader}
        onCaptionClick={onMoviesLike}
        savedMoviesIds={userSavedMoviesIds}
      />
    </main>
  );
}
