import PropTypes from 'prop-types';
import s from './Friend.module.css';

export const FriendsListItem = ({ avatar, name, isOnline}) => {
   return (
  
      <li className={s.item}>
        {isOnline ? <samp className={s.online}>0</samp> : <samp className={s.ofline}>0</samp>}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
     )
   }

   FriendsListItem.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.oneOf([true, false]),
      }),
    ),
  };