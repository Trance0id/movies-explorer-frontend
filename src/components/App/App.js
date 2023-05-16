import './App.css';
import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';


function App() {
  return (
    <div className="page">
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
    </div>
  );
}

export default App;
