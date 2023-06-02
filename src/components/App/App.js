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
  const [currentUser, setCurrentUser] = React.useState({});
  const [showPreloader, setShowPreloader] = React.useState(false);

  const makeMoviesData = (moviesArray, formdata) => {
    return {
      query: formdata.query,
      short: formdata.short,
      movies: moviesArray,
      moviesCount: moviesArray.length,
    };
  };

  const getMoviesFormData = (formdata) => {
    const formDataObj = {};

    for (let [key, value] of formdata) {
      formDataObj[key] = value;
    }

    return formDataObj;
  };

  const saveMoviesData = (data) => {
    for (const [key, value] of Object.entries(data)) {
      localStorage.setItem(key, value);
    }
  };

  const getMoviesData = () => {
    const moviesData = {};
    moviesData['short'] = localStorage.getItem('short');
    moviesData['query'] = localStorage.getItem('query');
    return moviesData;
  };

  const submitMoviesSearch = (formdata) => {
    setShowPreloader(true);
    getMovies()
      .then((res) => {
        const currentData = makeMoviesData(res, getMoviesFormData(formdata));
        setMoviesData(currentData);
        saveMoviesData(currentData);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowPreloader(false));
  };

  // const searchSavedMovies = (keywords) => {
  //   setShowPreloader(true);
  //   mainApi
  //     .getMovies(keywords)
  //     .then((res) => setMovies(res))
  //     .catch((err) => console.log(err))
  //     .finally(() => setShowPreloader(false));
  // };
  React.useEffect(() => {
    console.log(moviesData);
    setMoviesData(getMoviesData());
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
                <Movies data={moviesData} onFormSubmit={submitMoviesSearch} preloader={showPreloader} />
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
                  movies={moviesData.movies}
                  // onFormSubmit={searchSavedMovies}
                  preloader={showPreloader}
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
