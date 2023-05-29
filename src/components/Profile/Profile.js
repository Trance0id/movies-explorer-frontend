import { Link } from 'react-router-dom';
import './Profile.css'

export default function Profile() {
  return (
    <main className='profile'>
      <h2 className='profile__heading'>
        Привет, Дмитрий!
      </h2>
      <form className='profile__form'>
        <label className='profile__label'>
          Имя
          <input type='text' className='profile__input' placeholder='Введите имя' value='Дмитрий' />
        </label>
        <label className='profile__label'>
          E-mail
          <input type='text' className='profile__input' placeholder='Введите E-mail' value='pochta@yandex.ru' />
        </label>
        <div className='profile__filler'/>
        <button type='submit' className='button profile__submit'>
          Редактировать
        </button>
      </form>
      <Link to='/' className='link profile__logout-link'>
        Выйти из аккаунта
      </Link>

    </main>
  );
};
