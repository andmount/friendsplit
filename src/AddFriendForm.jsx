import React from 'react';

function AddFriendForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Event:
        <input
          name='nameOfEvent'
          type='text'
          value={props.nameOfEvent}
         />
      </label>
      <br />
      <label>
        Name:
        <input
          name='nameOfFriend'
          type='text'
          value={props.nameOfFriend}
         />
      </label>
      <br />
      <label>
        Paid:
        <input
          name='paid'
          type='text'
          value={props.paid}
         />
      </label>
      <br />
      <input type='submit' value='Add Friend' />
    </form>
  );
}

export default AddFriendForm;