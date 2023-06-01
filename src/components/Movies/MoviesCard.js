import './MoviesCard.css';

export default function MoviesCard( { movie, like }) {
  return (
    <li className="movie">
      <div
        className="interactive movie__image"
        style={{ backgroundImage: `url(${movie.link})` }}
      ></div>
      <div className="interactive movie__caption">
        <div className='movie__caption-title'>
          <h3 className="movie__caption-heading">{movie.name}</h3>
          {like ?
          <button
            type="button"
            className={`button movie__button movie__button_type_like ${movie.active && 'movie__button_active'}`}
            aria-label="Нравится"
          /> :
          <button
            type="button"
            className='button movie__button movie__button_type_delete'
            aria-label="Удалить"
          />}
        </div>
        <p className='movie__caption-length'>
          1ч 44м
        </p>
      </div>
    </li>
  );
}
