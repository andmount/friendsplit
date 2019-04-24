import React from 'react';

function AddFriendForm(props) {
  const errors = props.errors;

  return (
    <form onSubmit={props.handleSubmit}>
      {errors.map(error =>
        <p key={error}>{error}</p>
      )}
      <label>
        Event
        <input
          className='event'
          name='nameOfEvent'
          type='text'
          value={props.nameOfEvent}
          onChange={props.handleChange}
          disabled={props.isEventInputDisabled}
         />
      </label>
  
      <label>
        Name
        <input
          className='namefriend'
          name='nameOfFriend'
          type='text'
          value={props.nameOfFriend}
          onChange={props.handleChange}
         />
      </label>
      
      <label>
        Payment
        <input
          className='payt'
          name='payt'
          type='number'
          value={props.payt}
          onChange={props.handleChange}
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