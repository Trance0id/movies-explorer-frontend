import './Profile.css';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';

export default function Profile({ onFormSubmit, onUserLogout, formIsLoading, error, succes }) {
  const currentUser = useContext(CurrentUserContext);

  const validation = useValidation();

  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit(validation.inputValues);
  };

  const onLogout = e => {
    e.preventDefault();
    onUserLogout();
  };

  useEffect(() => {
    validation.resetForm({ name: currentUser.name, email: currentUser.email });
  }, []);

  return (
    <main className='profile'>
      <h2 className='profile__heading'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' name='profile' onSubmit={onSubmit}>
        <span className='profile__error'>{validation.errors.name}</span>
        <label className='profile__label'>
          Имя
          <input
            type='text'
            name='name'
            className={`profile__input ${validation.errors.name && 'profile__input_incorrect'}`}
            placeholder='Введите имя'
            value={validation.inputValues.name || ''}
            onChange={validation.onInputChange}
            required
            minLength={2}
            maxLength={30}
            autoComplete='off'
            pattern='^[A-zА-яё\s\-]+$'
          />
        </label>
        <label className='profile__label'>
          E-mail
          <input
            type='email'
            name='email'
            className={`profile__input ${validation.errors.email && 'profile__input_incorrect'}`}
            placeholder='Введите E-mail'
            value={validation.inputValues.email || ''}
            onChange={validation.onInputChange}
            required
          />
        </label>
        <span className='profile__error'>{validation.errors.email}</span>
        <div className='profile__filler' />
        {error && (
          <span className='profile__error'>
            {`При редактировании данных профиля возникла ошибка! ${error}`}
          </span>
        )}
        {succes && <span className='profile__succes'>{`Данные успешно обновлены!`}</span>}
        <button
          type='submit'
          className='interactive button profile__submit'
          disabled={
            !validation.isFormValid ||
            (validation.inputValues.name === currentUser.name &&
              validation.inputValues.email === currentUser.email)
          }
        >
          {formIsLoading ? 'Подождите...' : 'Редактировать'}
        </button>
      </form>
      <button
        type='button'
        className='interactive button profile__logout-button'
        onClick={onLogout}
      >
        Выйти из аккаунта
      </button>
    </main>
  );
}
