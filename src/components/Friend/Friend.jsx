import s from './Friend.module.css';

export const FriendListItem = ({ friends }) => {
   return (
   <ul className={s.friendlist}>
     {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={s.item}
      key={id}>
        {isOnline ? <samp className={s.online}>0</samp> : <samp className={s.ofline}>0</samp>}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
     ))} 
   </ul>
   );
   }