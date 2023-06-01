import { Link } from 'react-router-dom';
import './Auth.css'

export default function Auth( props ) {
  return (
    <div className='auth__container'>
      <Link to='/'className='interactive link auth__logo'/>
      <h2 className='auth__heading'>
        {props.heading}
      </h2>
      <form
        name={props.formName}
        className='auth__form'
        onSubmit={(e) => props.onFormSubmit(e)}
      >
        {props.hasNameField &&
          <label className='auth__label'>
            Имя
            <input
              type='text'
              className='auth__input'
              placeholder='Введите имя'
              name='name'
              required
              minLength={2}
              maxLength={30}
            />
            <span className='auth__error'>
            </span>
          </label>
          }
        <label className='auth__label'>
          E-mail
          <input
            type='email'
            className='auth__input'
            placeholder='Введите E-mail'
            name='email'
            required
          />
          <span className='auth__error'>
          </span>
        </label>
        <label className='auth__label'>
          Пароль
          <input
            type='password'
            className='auth__input auth__input_incorrect'
            placeholder='Введите пароль'
            defaultValue='dskjbfdsjdfslk'
            name='password'
            required
            minLength={8}
            maxLength={30}
          />
          <span className='auth__error'>
            Что-то пошло не так...
          </span>
        </label>
        <div className='auth__filler'/>
        <button type='submit' className='interactive button auth__submit'>
          {props.submitText}
        </button>
      </form>
      <div className='auth__caption'>
        <p className='auth__caption-text'>
          {props.submitCaptionText}
        </p>
        <Link to={props.linkUrl} className='interactive link auth__caption-link'>
          {props.linkText}
        </Link>
      </div>
    </div>
  );
};
