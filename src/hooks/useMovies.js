import { useState, useEffect } from 'react';
import * as beatfilmsApi from '../utils/MoviesApi';
import mainApi from '../utils/MainApi';
import { URL_MOVIES_API } from '../utils/constants';

const useMovies = (forUsersMovies = false) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [userSavedMovies, setUserSavedMovies] = useState([]);
  const [userSavedMoviesIds, setUserSavedMoviesIds] = useState([]);
  const [formData, setFormData] = useState({ query: '', short: false });
  const [showPreloader, setShowPreloader] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const prefix = forUsersMovies ? 'saved-' : '';

  const storeToLocalstorage = ({ movies = [], query = '', short = false }) => {
    localStorage.setItem(prefix + 'movies-short', JSON.stringify(short));
    localStorage.setItem(prefix + 'movies-query', JSON.stringify(query));
    localStorage.setItem(prefix + 'movies-movies', JSON.stringify(movies));
  };

  const getFromLocalstorage = () => {
    const moviesData = {};
    moviesData['short'] = JSON.parse(localStorage.getItem(prefix + 'movies-short'));
    moviesData['query'] = JSON.parse(localStorage.getItem(prefix + 'movies-query'));
    moviesData['movies'] = JSON.parse(localStorage.getItem(prefix + 'movies-movies'));
    return moviesData;
  };

  const getMoviesFrom = data => {
    return !forUsersMovies
      ? beatfilmsApi.getMovies().then(res => {
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
      : mainApi
          .getMovies()
          .then(res => {
            setMovies(res);
            setFilteredMovies(filterMovies(res, data));
            storeToLocalstorage({ movies: res, query: data.query, short: data.short });
          })
          .catch(err => console.log(err));
  };

  const onMoviesSearch = data => {
    setShowPreloader(true);
    setFormData(data);
    getMoviesFrom(data)
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
    const idToDelete = forUsersMovies
      ? movie._id
      : userSavedMovies.find(m => m.movieId === movie.movieId)._id;
    mainApi
      .deleteMovie(idToDelete)
      .then(() => {
        if (!forUsersMovies) {
          setUserSavedMovies(prevSavedMovies =>
            prevSavedMovies.filter(m => m.movieId !== movie.movieId)
          );
        } else {
          setMovies(prevMovies => prevMovies.filter(m => m.movieId !== movie.movieId));
        }
        setUserSavedMoviesIds(prevIds => prevIds.filter(id => id !== movie.movieId));
      })
      .catch(err => console.log(err));
  };

  const onCaptionClick = (movie, isLiked) => (!isLiked ? likeMovie(movie) : deleteMovie(movie));

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
      if (!forUsersMovies) {
        setUserSavedMovies(res);
        setUserSavedMoviesIds(res.map(m => m.movieId));
      } else {
        setMovies(res);
      }
    });
  }, []);

  useEffect(() => {
    setFilteredMovies(filterMovies(movies, formData));
  }, [movies, formData]);

  return {
    formData,
    onMoviesSearch,
    filteredMovies,
    showMore,
    onCaptionClick,
    userSavedMovies,
    userSavedMoviesIds,
  };
};

export default useMovies;
