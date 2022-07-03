import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem'
import s from './Friend.module.css';


export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

   FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
  
      }),
    ),
  };