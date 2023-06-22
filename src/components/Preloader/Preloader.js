import './Preloader.css';

export default function Preloader({ preloader }) {
  return (
    <div className={`preloader ${preloader && 'preloader__visible'}`}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
}
