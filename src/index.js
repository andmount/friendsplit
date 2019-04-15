import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Splitter from './Splitter';


let friends = [
  { name: 'Andy', payt: 1100 },
  { name: 'John', payt: 100 },
  { name: 'Peter', payt: 50 },
  { name: 'Julia', payt: 500 },
  { name: 'Boris', payt: 700 },
];

ReactDOM.render(<Splitter /> , document.getElementById('root'));