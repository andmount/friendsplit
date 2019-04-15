function Total(props) {
  const total = props.friends.reduce(((sum, friend) =>
    sum + friend.payt), 0
  );
  return `Total: ${total}`;
}

export default Total;