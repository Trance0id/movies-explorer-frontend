import './AboutMe.css';
import myPhoto from '../../images/photo.jpg'
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <section className='about-me' id='aboutMe'>
      <h2 className='about-me__heading section-heading'>
        Студент
      </h2>
      <article className='person-info'aria-label="Данные студента">
        <section className='person-info__text'>
          <div>
            <h3 className='person-info__heading'>
              Дмитрий
            </h3>
            <p className='person-info__subheading'>
              Фронтенд-разработчик, 32 года
            </p>
            <p className='person-info__description'>
              Я родился и живу в Воронеже, закончил Автоматики и электромеханики ВГТУ.
              У меня есть жена и дочь. Я люблю играть в настолки, увлекаюсь туризмом.
              Недавно начал кодить. С 2016 года работаю в сети частных клиник.
              Хочу попробовать сменить род деятельности на разработку.
            </p>
          </div>
          <Link to='https://github.com/Trance0id' className='interactive link person-info__link' target='_blank'>
            Github
          </Link>
        </section>
        <img className='person-info__picture' src={myPhoto} alt='Фото профиля' />
      </article>
    </section>
  );
}
