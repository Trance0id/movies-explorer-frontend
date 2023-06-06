import { Link } from 'react-router-dom';
import './Auth.css';
import useValidation from '../../hooks/useValidation';

export default function Auth(props) {
  const validation = useValidation();

  const onSubmit = e => {
    e.preventDefault();
    props.onFormSubmit(validation.inputValues);
  };

  return (
    <div className='auth__container'>
      <Link to='/' className='interactive link auth__logo' />
      <h2 className='auth__heading'>{props.heading}</h2>
      <form name={props.formName} className='auth__form' onSubmit={onSubmit}>
        {props.hasNameField && (
          <label className='auth__label'>
            Имя
            <input
              type='text'
              className={`auth__input ${validation.errors.name && 'auth__input_incorrect'}`}
              placeholder='Введите имя'
              name='name'
              required
              minLength={2}
              maxLength={30}
              value={validation.inputValues.name}
              onChange={validation.onInputChange}
            />
            <span className='auth__error'>{validation.errors.name}</span>
          </label>
        )}
        <label className='auth__label'>
          E-mail
          <input
            type='email'
            className={`auth__input ${validation.errors.email && 'auth__input_incorrect'}`}
            placeholder='Введите E-mail'
            name='email'
            required
            value={validation.inputValues.email}
            onChange={validation.onInputChange}
          />
          <span className='auth__error'>{validation.errors.email}</span>
        </label>
        <label className='auth__label'>
          Пароль
          <input
            type='password'
            className={`auth__input ${validation.errors.password && 'auth__input_incorrect'}`}
            placeholder='Введите пароль'
            name='password'
            required
            minLength={8}
            maxLength={30}
            value={validation.inputValues.password}
            onChange={validation.onInputChange}
          />
          <span className='auth__error'>{validation.errors.password}</span>
        </label>
        <div className='auth__filler' />
        <button
          type='submit'
          className='interactive button auth__submit'
          disabled={!validation.isFormValid}
        >
          {props.formIsLoading ? 'Подождите...' : props.submitText}
        </button>
      </form>
      <div className='auth__caption'>
        <p className='auth__caption-text'>{props.submitCaptionText}</p>
        <Link to={props.linkUrl} className='interactive link auth__caption-link'>
          {props.linkText}
        </Link>
      </div>
    </div>
  );
}
