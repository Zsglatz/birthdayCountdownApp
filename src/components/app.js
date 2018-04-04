import React, { Component } from 'react';
import BirthdayForm from './birthdayForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
        <h1> Birthday Countdown! </h1>
          <div className='header-skew'>
            <div className='header-subskew'>
            </div>
          </div>
        </header>
        <BirthdayForm />
      </div>
    );
  }
}
