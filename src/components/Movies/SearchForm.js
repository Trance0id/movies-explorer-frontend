import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ onFormSubmit }) {
  const [keywords, setKeywords] = useState('');

  const onInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(keywords);
    setKeywords('');
  };

  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form name='search-form' onSubmit={onSubmit}>
        <fieldset className='search-form__films-search'>
          <input type='text' className='search-form__input' placeholder='Фильм' name='keywords' required minLength={2} value={keywords || ''} onChange={onInputChange} />
          <button type='submit' className='interactive button search-form__submit'>
            Поиск
          </button>
        </fieldset>
        <label className='interactive search-form__label'>
          <input className='search-form__checkbox' name='short' type='checkbox' />
          <span className='search-form__switchbox'>
            <span className='search-form__switcher' />
          </span>
          Короткометражки
        </label>
      </form>
    </section>
  );
}
