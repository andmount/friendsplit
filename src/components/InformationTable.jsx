import React from 'react';
import Total from './Total';
import EventName from './EventName';
import FriendsWhoPaid from './FriendsWhoPaid';

function InformationTable(props) {
  return (
    <div className='informationtable'>
      <h2 className='eventandtotal'>
        <EventName event={props.event} /> | <Total friends={props.friends}/>
      </h2>
      <FriendsWhoPaid friends={props.friends}/>
    </div>
  );
}

export default InformationTable;