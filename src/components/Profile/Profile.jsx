import PropTypes from 'prop-types';
import s from './Profile.module.css';

export const Profile = ({items}) => {
   return (
      <div className={s.profile}>
      <div class={s.description}>
        <img
          src={items.avatar}
          alt={items.username}
          className={s.avatar}
        />
        <p className={s.name}>{items.username}</p>
        <p className={s.tag}>@{items.tag}</p>
        <p className={s.location}>{items.location}</p>
      </div>
    
      <ul class={s.stats}>
        <li>
          <span className={s.label}>followers</span>
          <span className={s.quantity}>{items.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{items.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{items.stats.likes}</span>
        </li>
      </ul>
    </div>
    );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};