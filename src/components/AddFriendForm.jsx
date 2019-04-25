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

      <label>
        What for?
        <input
          className='whatfor'
          name='whatFor'
          type='text'
          value={props.whatFor}
          onChange={props.handleChange}
         />
      </label>

      <div className='buttons'>
        <button className='submit' type='submit'>
          Add Friend
        </button>
        
        <button type='reset' className='reset' onClick={props.handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default AddFriendForm;