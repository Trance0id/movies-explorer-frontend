import './NavTab.css';
// import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li>
          <HashLink to='#aboutProject' className='interactive link nav-tab__link' smooth>
            О проекте
          </HashLink>
        </li>
        <li>
          <HashLink to='#techs' className='interactive link nav-tab__link' smooth>
            Технологии
          </HashLink>
        </li>
        <li>
          <HashLink to='#aboutMe' className='interactive link nav-tab__link' smooth>
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
