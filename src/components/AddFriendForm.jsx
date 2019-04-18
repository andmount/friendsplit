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
          onChange={props.handleChange}
          required
         />
      </label>
  
      <label>
        Name:
        <input
          name='nameOfFriend'
          type='text'
          value={props.nameOfFriend}
          onChange={props.handleChange}
          required
         />
      </label>
      
      <label>
        Payment:
        <input
          name='payt'
          type='number'
          value={props.payt}
          onChange={props.handleChange}
          min='1'
          required
         />
      </label>
     
      <input
        className='submit'
        type='submit'
        value='Add Friend'
      />
    </form>
  );
}

export default AddFriendForm;