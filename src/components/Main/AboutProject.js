import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project' id='aboutProject'>
      <h2 className='about-project__heading section-heading'>
        О проекте
      </h2>
      <ul className='about-project__details'>
        <li className='about-project__detail'>
          <h3 className='about-project__detail-heading'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__detail-text'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__detail'>
          <h3 className='about-project__detail-heading'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__detail-text'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__progress-bar'>
        <p className='about-project__progress-bar-first-line about-project__progress-bar-first-cell'>
          1 неделя
        </p>
        <p className='about-project__progress-bar-first-line'>
          4 недели
        </p>
        <p className='about-project__progress-bar-second-line'>
          Back&ndash;end
        </p>
        <p className='about-project__progress-bar-second-line'>
          Front&ndash;end
        </p>
      </div>
    </section>
  );
}
