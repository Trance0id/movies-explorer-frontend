import { useState, useEffect } from 'react';

const useScreen = (notForUsersMovies = false) => {
  const [startMovies, setStartMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(0);

  const calcMoviesGrid = () => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 768) {
      setStartMovies(5);
      setMoreMovies(2);
    } else if (screenWidth < 1280) {
      setStartMovies(8);
      setMoreMovies(2);
    } else {
      setStartMovies(12);
      setMoreMovies(3);
    }
    if (notForUsersMovies) {
      window.addEventListener('resize', handleWindowResize);
    }
  };

  function handleWindowResize() {
    window.removeEventListener('resize', handleWindowResize);
    setTimeout(calcMoviesGrid, 3000);
  }

  useEffect(() => {
    calcMoviesGrid();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { startMovies, moreMovies };
};

export default useScreen;
