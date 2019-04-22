import React from 'react';
import Splitter from './Splitter';
import logo from '../images/logo.png'
import joe from '../images/joe.png'

function App(props) {
  return (
  <div>
    <header>
      <img className='logo' src={logo} alt='logo'/>
    </header>
    <Splitter />
    <footer>
      <p>
        Andrey Nagorniy 2019 | <a
          className='repo'
          href="https://github.com/andmount/friendsplit"
          target='_blank'
          rel='noreferrer noopener'
        >
          Repo
        </a>
      </p>
      <img className='joe' src={joe} alt='joe-staring'/>
    </footer>
  </div>
  );
}

export default App;