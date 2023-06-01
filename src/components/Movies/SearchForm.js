import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className='search-form' aria-label='Форма поиска фильмов'>
      <form name='search-form'>
        <fieldset className='search-form__films-search'>
          <input
            type='text'
            className='search-form__input'
            placeholder='Фильм'
            name='keywords'
            required
            minLength={2}
           />
          <button type='submit' className='interactive button search-form__submit'>Поиск</button>
        </fieldset>
        <label className='interactive search-form__label'>
          <input className='search-form__checkbox' name='short' type='checkbox'/>
          <span className='search-form__switchbox'>
            <span className='search-form__switcher' />
          </span>
          Короткометражки
        </label>
      </form>
    </section>
  );
}
