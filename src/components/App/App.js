import './App.css';
import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="page">
      <Header />
      {/* <Navigation /> */}
      <Routes>
          <Route
            path="/"
            element={<Main/>}
          />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies />}
          />
          {/* <Route
            path="/sign-up"
            element={
              <Register />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login/>
            }
          /> */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
