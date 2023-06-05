import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import getMovies from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
  const [moviesData, setMoviesData] = React.useState({});
  const [savedMoviesData, setSavedMoviesData] = React.useState({ movies: [] });
  const [currentUser, setCurrentUser] = React.useState({});
  const [showPreloader, setShowPreloader] = React.useState(false);

  const makeMoviesData = (formdata, moviesArray) => {
    return {
      query: formdata.query,
      short: formdata.short,
      movies: moviesArray,
      moviesCount: moviesArray.length,
    };
  };

  const saveMoviesData = data => {
    localStorage.setItem('movies-short', data.short);
    localStorage.setItem('movies-query', data.query);
    localStorage.setItem('movies-list', JSON.stringify(data.movies));
  };

  function getMoviesData() {
    const moviesData = {};
    moviesData['short'] = localStorage.getItem('movies-short') === 'true' ? true : false;
    moviesData['query'] = localStorage.getItem('movies-query');
    moviesData['movies'] = JSON.parse(localStorage.getItem('movies-list'));
    return moviesData;
  }

  const onMoviesSearch = formdata => {
    setShowPreloader(true);
    getMovies()
      .then(res => {
        const currentData = makeMoviesData(formdata, res);
        setMoviesData(currentData);
        saveMoviesData(currentData);
      })
      .catch(err => console.log(err))
      .finally(() => setShowPreloader(false));
  };

  const onSavedMoviesSearch = () => {};

  const onLikeClick = (movie, isLiked) => {
    if (!isLiked) {
      setSavedMoviesData(prevSavedMoviesData => ({
        ...prevSavedMoviesData,
        movies: [...prevSavedMoviesData.movies, movie],
      }));
      // mainApi.addMovie(movie).then(newMovie => {
      //   setSavedMoviesData({...savedMoviesData, savedMoviesData.movies.push(newMovie)});
      // });
    }
  };

  const onDeleteClick = movie => {
    setSavedMoviesData(prevSavedMoviesData => ({
      ...prevSavedMoviesData,
      movies: prevSavedMoviesData.movies.filter(m => m.id !== movie.id),
    }));
    // mainApi
    //   .deleteMovie(movieId)
    //   .then(() => {
    //     setSavedMoviesData(prevMoviesData => prevMoviesData.movies.filter(m => m.id !== movieId));
    //   })
    //   .catch(err => console.log(err));
  };

  React.useEffect(() => {
    // console.log(getMoviesData());
    setMoviesData(getMoviesData());
    return () => localStorage.clear();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <>
                <Header />
                <Movies
                  data={moviesData}
                  onFormSubmit={onMoviesSearch}
                  preloader={showPreloader}
                  onCaptionClick={onLikeClick}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header />
                <SavedMovies
                  movies={savedMoviesData.movies}
                  preloader={showPreloader}
                  onFormSubmit={onSavedMoviesSearch}
                  onCaptionClick={onDeleteClick}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route path='signup' element={<Register />} />
          <Route path='signin' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
