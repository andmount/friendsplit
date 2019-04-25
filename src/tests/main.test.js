import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { friendsToTransactions } from '../components/ResultOfSplitting';
import { validate } from '../components/Splitter';
import FriendsWhoPaid from '../components/FriendsWhoPaid';

// Data
const friends1 = [
  { name: 'Andy', payt: 1100, whatfor: 'food' },
  { name: 'John', payt: 100, whatfor: 'transport' },
  { name: 'Peter', payt: 50, whatfor: 'snowboarding' },
  { name: 'Julia', payt: 500, whatfor: 'party' },
  { name: 'Boris', payt: 700, whatfor: 'hotel' }
];

const friends2 = [
  { name: 'Andy', payt: 1000, whatfor: 'food' },
  { name: 'John', payt: 1000, whatfor: 'transport' },
  { name: 'Peter', payt: 1000, whatfor: 'snowboarding' },
  { name: 'Julia', payt: 1000, whatfor: 'party' },
  { name: 'Boris', payt: 1000, whatfor: 'hotel' }
];

const friends3 = [
  { name: 'Andy', payt: 400, whatfor: 'food' },
  { name: 'John', payt: 550, whatfor: 'transport' },
  { name: 'Peter', payt: 550, whatfor: 'snowboarding' }
];

// Tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('friends convert to transactions right', () => {
  const transactions1 = ['John gives 390 to Andy', 'Peter gives 220 to Andy', 'Peter gives 10 to Julia', 'Peter gives 210 to Boris'];
  const transactions2 = [];
  const transactions3 = ['Andy gives 50 to John', 'Andy gives 50 to Peter'];

  expect(friendsToTransactions(friends1)).toEqual(transactions1);
  expect(friendsToTransactions(friends2)).toEqual(transactions2);
  expect(friendsToTransactions(friends3)).toEqual(transactions3);
});

it('validations work right', () => {
  const data1 = ['', '', '', 'hotel', friends1 ];
  const data2 = ['Snowboarding', '1bob', '00000', 'hotel', friends1];
  const data3 = ['Snowboarding', 'ANDY', '100', 'hotel', friends1];
  const data4 = ['Snowboarding', 'Bob', '100', '', friends1];

  expect(validate(...data1)).toEqual(["❌ Name of event can't be empty", "❌ Name of friend can't be empty", "❌ Payment must be more than '0'"]);
  expect(validate(...data2)).toEqual(["❌ Name of friend can't start from digit", "❌ Payment must be more than '0'"]);
  expect(validate(...data3)).toEqual(["❌ This name of friend already exist"]);
  expect(validate(...data4)).toEqual(['❌ Field "What for?" can\'t be empty']);
});

it('FriendsWhoPaid component work right', () => {
  const div = document.createElement('div');
  const output1 = <ul>
    {friends1.map(friend => {
      return <li key={friend.name}>{friend.name} paid {friend.payt} for {friend.whatfor}</li>
    })}
  </ul>

  const output2 = <ul></ul>

  expect(ReactDOM.render(<FriendsWhoPaid friends={friends1}/>, div)).toEqual(output1);
  expect(<FriendsWhoPaid />).toEqual(output2);
});  