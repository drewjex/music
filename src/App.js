import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='nav-container'>
          <div className='nav'>
            <div className='title'><h2>Drew Jex</h2></div>
            <div className='menu'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Songs</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
            </div>
            </div>
          </div>
          <h1>Listen to Uplifting Music</h1>
          <p>
            Much of today's music is loud and overwhelming. Enjoy some nice relaxing piano solo for a change.
          </p>
          <button>Listen Now</button>
        </div>
        <div className='content'>
          <div className='card-container'>
            <h1>Top Songs</h1>
            <div className='cards'>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>
            </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default App;
