import React from 'react';

function FriendsWhoPaid(props) {
  const friendslist = props.friends.map((friend) =>
    <li>{friend.name}: {friend.paid}</li>
  );
  return (
    <ul>{friendslist}</ul>
  );
}

export default FriendsWhoPaid;