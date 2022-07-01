
import s from './Statistics.module.css';

const creationColor = () => {
   return (
     '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
   );
 };

export const Statistics = ({ title, stats }) => {
return (
<section className={s.statistics}>
  {title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.statList}>
    {stats.map(({ id, label, percentage }) => (<li className={s.item}
     key={id}
     style={{ backgroundColor: creationColor() }}>
       <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>))}
    </ul>
</section>
);
};