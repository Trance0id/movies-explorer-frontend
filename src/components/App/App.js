import './App.css';

import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
  const navigate = useNavigate();

  const [moviesData, setMoviesData] = React.useState({});
  const [savedMoviesData, setSavedMoviesData] = React.useState({ movies: [] });
  const [currentUser, setCurrentUser] = React.useState({});
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [formIsLoading, setFormIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  console.log(loggedIn);

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

  const onRegister = data => {
    console.log(data);
    setFormIsLoading(true);
    mainApi
      .register(data)
      .then(res => {
        console.log(res);
        navigate('/signin', { replace: true });
      })
      .catch(err => handleError(err))
      .finally(() => setFormIsLoading(false));
  };

  const onLogin = data => {
    setFormIsLoading(true);
    mainApi
      .login(data)
      .then(res => {
        navigate('/movies', { replace: true });
        setLoggedIn(true);
      })
      .catch(err => handleError(err))
      .finally(() => setFormIsLoading(false));
  };

  const onLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        navigate('/');
      })
      .catch(err => handleError(err));
  };

  const onUserDataChange = userData => {
    setFormIsLoading(true);
    mainApi
      .setUserInfo(userData)
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => handleError(err))
      .finally(() => setFormIsLoading(false));
  };

  //improve logics
  const handleError = err => {
    console.log('from error handler: ', err);
  };

  React.useEffect(() => {
    mainApi
      .getUserInfo()
      .then(res => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch(err => {
        setLoggedIn(false);
        handleError(err);
      });
    setMoviesData(getMoviesData());
    return () => localStorage.clear();
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <>
                <ProtectedRoute loggedIn={loggedIn} component={Header} />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Movies}
                  data={moviesData}
                  onFormSubmit={onMoviesSearch}
                  preloader={showPreloader}
                  onCaptionClick={onLikeClick}
                />
                <ProtectedRoute loggedIn={loggedIn} component={Footer} />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <ProtectedRoute loggedIn={loggedIn} component={Header} />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  movies={savedMoviesData.movies}
                  preloader={showPreloader}
                  onFormSubmit={onSavedMoviesSearch}
                  onCaptionClick={onDeleteClick}
                />
                <ProtectedRoute loggedIn={loggedIn} component={Footer} />
              </>
            }
          />
          <Route
            path='/profile'
            element={
              <>
                <ProtectedRoute loggedIn={loggedIn} component={Header} />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Profile}
                  onFormSubmit={onUserDataChange}
                  onUserLogout={onLogout}
                  formIsLoading={formIsLoading}
                />
              </>
            }
          />
          <Route
            path='signup'
            element={<Register onFormSubmit={onRegister} formIsLoading={formIsLoading} />}
          />
          <Route
            path='signin'
            element={<Login onFormSubmit={onLogin} formIsLoading={formIsLoading} />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
