import './Main.css';
import Promo from './Promo'
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';

export default function Main() {
  return (
    <main className='main'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
