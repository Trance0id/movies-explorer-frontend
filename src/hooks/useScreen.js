import { useState, useEffect } from 'react';
import { MOVIES_AMOUNT } from '../utils/constants';

const useScreen = (notForUsersMovies = false) => {
  const [startMovies, setStartMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(0);

  const calcMoviesGrid = () => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < 768) {
      setStartMovies(MOVIES_AMOUNT.small.start);
      setMoreMovies(MOVIES_AMOUNT.small.add);
    } else if (screenWidth < 1280) {
      setStartMovies(MOVIES_AMOUNT.medium.start);
      setMoreMovies(MOVIES_AMOUNT.medium.add);
    } else {
      setStartMovies(MOVIES_AMOUNT.large.start);
      setMoreMovies(MOVIES_AMOUNT.large.add);
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
