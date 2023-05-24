import './MoviesCard.css';

export default function MoviesCard( {movie}) {
  console.log(movie);
  return (
    <li className="movie">
      <div
        className="movie__image"
        style={{ backgroundImage: `url(${movie.link})` }}
      ></div>
      <div className="movie__caption">
        <div className='movie__caption-title'>
          <h3 className="movie__caption-heading">{movie.name}</h3>
          <button
            type="button"
            className='movie__button-like'
            aria-label="Нравится"
          ></button>
        </div>
        <p className='movie__caption-length'>
          1ч 44м
        </p>
      </div>
    </li>
  );
}
