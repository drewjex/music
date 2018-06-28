import React, { Component } from 'react';
import './App2.scss';

class App2 extends Component {
  render() {
    return (
      <div className='container'>
        <div className='column left'>
            <div className='header left'>
                
            </div>
            <div className='sidebar'>
                
            </div>
        </div>
        <div className='column right'>
            <div className='header right'>
                
            </div>
            <div className='content'>
                <h2>New Songs</h2>
                <div className='grid'>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App2;
