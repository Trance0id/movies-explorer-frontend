import './App.css';
import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={
        <>
          <Header />
          <Main/>
          <Footer/>
        </>} />
        <Route
          path="/movies"
          element={<>
            <Header />
            <Movies />
            <Footer />
        </>} />
        <Route
          path="/saved-movies"
          element={<>
            <Header />
            <SavedMovies />
            <Footer />
        </>} />
        <Route
          path="/profile"
          element={<>
            <Header />
            <Profile />
        </>} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
