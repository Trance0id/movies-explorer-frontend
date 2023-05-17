import './App.css';
import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      {/* <Navigation />
      <Routes>
          <Route
            path="*"
            element={<Main/>}
          />
          <Route
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
          />
        </Routes>
        <Footer /> */}
    </div>
  );
}

export default App;
