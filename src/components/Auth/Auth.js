import { Link } from 'react-router-dom';
import './Auth.css'

export default function Auth( props ) {
  return (
    <main className='auth'>
      <Link to='/'className='interactive link auth__logo'/>
      <h2 className='auth__heading'>
        {props.heading}
      </h2>
      <form className='auth__form'>
        {props.hasNameField &&
          <label className='auth__label'>
            Имя
            <input type='text'
              className='auth__input'
              placeholder='Введите имя'
            />
            <div className='auth__error'>
            </div>
          </label>
          }
        <label className='auth__label'>
          E-mail
          <input type='email'
            className='auth__input'
            placeholder='Введите E-mail'
          />
          <div className='auth__error'>
          </div>
        </label>
        <label className='auth__label'>
          Пароль
          <input type='password'
            className='auth__input auth__input_incorrect'
            placeholder='Введите пароль'
            value='dskjbfdsjdfslk'
          />
          <div className='auth__error'>
            Что-то пошло не так...
          </div>
        </label>
        <div className='auth__filler'/>
        <button type='submit' className='interactive button auth__submit'>
          {props.submitText}
        </button>
      </form>
      <caption className='auth__caption'>
        <p className='auth__caption-text'>
          {props.submitCaptionText}
        </p>
        <Link to={props.linkUrl} className='interactive link auth__caption-link'>
          {props.linkText}
        </Link>
      </caption>
    </main>
  );
};
