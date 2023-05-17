import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__buttons'>
        <li>
          <button className='nav-tab__button'>
            О проекте
          </button>
        </li>
        <li>
          <button className='nav-tab__button'>
            Технологии
          </button>
        </li>
        <li>
          <button className='nav-tab__button'>
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
}
