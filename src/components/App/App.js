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
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [showPreloader, setShowPreloader] = React.useState(false);

  const searchMovies = () => {
    setShowPreloader(true);
    getMovies()
      .then((res) => setMovies(res))
      .catch((err) => console.log(err))
      .finally(() => setShowPreloader(false));
  };

  const searchSavedMovies = (keywords) => {
    setShowPreloader(true);
    mainApi
      .getMovies(keywords)
      .then((res) => setMovies(res))
      .catch((err) => console.log(err))
      .finally(() => setShowPreloader(false));
  };

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
                <Movies movies={movies} onFormSubmit={searchMovies} preloader={showPreloader} />
                <Footer />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header />
                <SavedMovies movies={movies} onFormSubmit={searchSavedMovies} preloader={showPreloader} />
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
