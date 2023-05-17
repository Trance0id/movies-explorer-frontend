import './Main.css';
import Promo from './Promo'
import NavTab from './NavTab';
import AboutProject from './AboutProject';


export default function Main() {
  return (
    <main className='main'>
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}
