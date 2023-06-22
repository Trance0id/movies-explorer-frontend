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
import mainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});
  const [formIsLoading, setFormIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState('');
  const [updateSuccess, setUpdateSuccess] = React.useState('');

  const onRegister = data => {
    setError('');
    setFormIsLoading(true);
    mainApi
      .register(data)
      .then(res => {
        onLogin({ email: data.email, password: data.password });
      })
      .catch(err => setError(err))
      .finally(() => setFormIsLoading(false));
  };

  const onLogin = data => {
    setError('');
    setFormIsLoading(true);
    mainApi
      .login(data)
      .then(() => {
        mainApi.getUserInfo().then(res => {
          setCurrentUser(res);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        });
      })
      .catch(err => setError(err))
      .finally(() => setFormIsLoading(false));
  };

  const onLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        navigate('/');
        localStorage.clear();
        setCurrentUser({});
      })
      .catch(err => console.log(err));
  };

  const onUserDataChange = userData => {
    setError('');
    setUpdateSuccess('');
    setFormIsLoading(true);
    mainApi
      .setUserInfo(userData)
      .then(res => {
        setCurrentUser(res);
        setUpdateSuccess('Ваши данные успешно обновлены!');
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setFormIsLoading(false));
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
        console.log(err);
      });
  }, []);

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
                <ProtectedRoute loggedIn={loggedIn} component={Movies} />
                <ProtectedRoute loggedIn={loggedIn} component={Footer} />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <ProtectedRoute loggedIn={loggedIn} component={Header} />
                <ProtectedRoute loggedIn={loggedIn} component={SavedMovies} />
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
                  error={error}
                  success={updateSuccess}
                />
              </>
            }
          />
          <Route
            path='signup'
            element={
              <Register onFormSubmit={onRegister} formIsLoading={formIsLoading} error={error} />
            }
          />
          <Route
            path='signin'
            element={<Login onFormSubmit={onLogin} formIsLoading={formIsLoading} error={error} />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
