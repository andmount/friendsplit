import React from 'react';

function FriendsWhoPaid(props) {
  const friendslist = props.friends.map((friend) =>
    <li key={friend.name}>{friend.name} paid {friend.payt} for {friend.whatFor}</li>
  );
  return (
    <ul>{friendslist}</ul>
  );
}

export default FriendsWhoPaid;