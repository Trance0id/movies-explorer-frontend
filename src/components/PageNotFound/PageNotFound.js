import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className='page-not-found'>
      <h2 className='page-not-found__heading'>
        <span>404</span>
        <span className='page-not-found__text'>Страница не найдена</span>
      </h2>
      <button
        type='button'
        className='interactive button page-not-found__back-button'
        onClick={() => navigate('/')}
      >
        Назад
      </button>
    </main>
  );
}
