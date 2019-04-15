import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalculationArea from './CalculationArea';
// import App from './App';


let friends = [
  { name: 'Andy', payt: 1100 },
  { name: 'John', payt: 100 },
  { name: 'Peter', payt: 50 },
  { name: 'Julia', payt: 500 },
  { name: 'Boris', payt: 700 },
];

ReactDOM.render(<CalculationArea friends={friends} event='Kinky party'/>, document.getElementById('root'));