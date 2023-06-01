import { useNavigate } from 'react-router-dom';
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate();
  return (
    <main className='profile'>
      <h2 className='profile__heading'>
        Привет, Дмитрий!
      </h2>
      <form className='profile__form' name='profile'>
        <label className='profile__label'>
          Имя
          <input
            type='text'
            className='profile__input'
            placeholder='Введите имя'
            defaultValue='Дмитрий'
            required
            minLength={2}
            maxLength={30}
          />
        </label>
        <label className='profile__label'>
          E-mail
          <input
            type='email'
            className='profile__input'
            placeholder='Введите E-mail'
            defaultValue='pochta@yandex.ru'
            required
          />
        </label>
        <div className='profile__filler'/>
        <button type='submit' className='interactive button profile__submit'>
          Редактировать
        </button>
      </form>
      <button
        type='button'
        className='interactive button profile__logout-button'
        onClick={() => navigate('/')}
      >
        Выйти из аккаунта
      </button>

    </main>
  );
};
