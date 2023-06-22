import { useState, useEffect } from 'react';
import './SearchForm.css';

export default function SearchForm({ queryText, shortState, onFormSubmit, onShortChange }) {
  const [queryValue, setQueryValue] = useState('');
  const [shortValue, setShortValue] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setQueryValue(queryText);
    setShortValue(shortState);
  }, [queryText, shortState]);

  const onSubmit = e => {
    e.preventDefault();
    if (queryValue) {
      setError('');
      onFormSubmit({ query: queryValue, short: shortValue });
    } else {
      setError('Введите ключевое слово.');
    }
  };

  const onShortClick = e => {
    setShortValue(prevState => !prevState);
    onShortChange(!shortValue);
  };

  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form name='search-form' onSubmit={onSubmit}>
        <fieldset className='search-form__films-search'>
          <input
            type='text'
            className='search-form__input'
            placeholder='Фильм'
            name='query'
            value={queryValue || ''}
            onChange={e => setQueryValue(e.target.value)}
            // required
            minLength={2}
          />
          <button type='submit' className='interactive button search-form__submit'>
            Поиск
          </button>
        </fieldset>
        <span className='search-form__error'>{error}</span>
        <label className='interactive search-form__label' name='shorts'>
          <input
            className='search-form__checkbox'
            name='short'
            type='checkbox'
            checked={shortValue || false}
            onChange={onShortClick}
          />
          <span className='search-form__switchbox'>
            <span className='search-form__switcher' />
          </span>
          Короткометражки
        </label>
      </form>
    </section>
  );
}
