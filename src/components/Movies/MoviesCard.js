import './MoviesCard.css';
import { URL_MOVIES_API as url } from '../../utils/constants';
import { Link } from 'react-router-dom';

export default function MoviesCard({ movie, like }) {
  const { duration } = movie;
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;

  return (
    <li className='movie'>
      <Link to={movie.trailerLink || ''} className='interactive link movie__image' style={{ backgroundImage: `url(${url + movie.image.url})` }} target='_blank'></Link>
      <div className='interactive movie__caption'>
        <div className='movie__caption-title'>
          <h3 className='movie__caption-heading'>{movie.nameRU}</h3>
          {like ? (
            <button type='button' className={`button movie__button movie__button_type_like ${movie.active && 'movie__button_active'}`} aria-label='Нравится' />
          ) : (
            <button type='button' className='button movie__button movie__button_type_delete' aria-label='Удалить' />
          )}
        </div>
        <p className='movie__caption-length'>
          {durationHours > 0 && `${durationHours + 'ч '}`}
          {durationMinutes > 0 && `${durationMinutes + 'м'}`}
        </p>
      </div>
    </li>
  );
}
