import { useState, useEffect } from 'react';
import './SearchForm.css';

export default function SearchForm({ queryText, shortState, onFormSubmit }) {
  const [queryValue, setQueryValue] = useState(queryText);
  const [shortValue, setShortValue] = useState(shortState);

  // console.log('searchForm mounted');
  // useEffect(() => {

  // }, []);

  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit({ query: queryValue, short: shortValue });
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
            value={queryValue || queryText}
            onChange={e => setQueryValue(e.target.value)}
            required
            minLength={2}
          />
          <button type='submit' className='interactive button search-form__submit'>
            Поиск
          </button>
        </fieldset>
        <label className='interactive search-form__label' name='shorts'>
          <input
            className='search-form__checkbox'
            name='short'
            type='checkbox'
            checked={shortValue || shortState}
            onChange={() => setShortValue(prevState => !prevState)}
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
