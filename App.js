import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './Course'


class App extends Component {
  render() {
    var courses=[
      { name: 'Complete Web Development course', price: 199 },
      { name: 'Complete Java Development course', price: 150 },
      { name: 'Complete Python Developer course', price: 150 },
      { name: 'Complete IOS installation  course', price: 50 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Course Sales page.</h1>
        </header>
             <Course items={courses} />

      </div>
    );
  }
}

export default App;
