import { FriendsListItem } from './FriendListItem.jsx';
import { FriendsList } from './Friends.Styled.js';

export const FriendList = ({ friends }) => (
  <FriendsList>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendsListItem
        key={id}
        name={name}
        avatar={avatar}
        isOnline={isOnline}
      />
    ))}
  </FriendsList>
);
