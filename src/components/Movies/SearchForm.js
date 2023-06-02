import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ queryText, shortState, onFormSubmit }) {
  // const [query, setQuery] = useState('');
  // const [short, setShort] = useState(false);

  // const onQueryChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const onShortChange = (e) => {
  //   setShort(e.target.checked);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(new FormData(e.target));
    // setQuery('');
  };

  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form name='search-form' onSubmit={onSubmit}>
        <fieldset className='search-form__films-search'>
          <input type='text' className='search-form__input' placeholder='Фильм' name='query' defaultValue={queryText} required minLength={2} />
          <button type='submit' className='interactive button search-form__submit'>
            Поиск
          </button>
        </fieldset>
        <label className='interactive search-form__label' name='shorts'>
          <input className='search-form__checkbox' name='short' type='checkbox' defaultChecked={shortState} />
          <span className='search-form__switchbox'>
            <span className='search-form__switcher' />
          </span>
          Короткометражки
        </label>
      </form>
    </section>
  );
}
