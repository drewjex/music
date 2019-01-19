import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Songs from "./routes/Songs"
import About from "./routes/About"
import './App.scss';

class App extends Component {
  render() {
    return (
        <Router>
      <div className='container'>
        <div className='column-container'>
            <div className='column left'>
                <div className='header left'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sulPA0dLaWzdLkJwfSZ2S6ghlWM6JaKOwBe3-PxTOr7Ad5DA' alt='' />
                    <h2>Drew Jex</h2>
                </div>
                <div className='sidebar'>
                    <div className='list-container'>
                        <span>Listen</span>
                        <ul>
                            <li className='selected'><FontAwesome name='headphones' /> New Releases</li>
                            <li><FontAwesome name='users' /> Popular</li>
                            <li><FontAwesome name='flask' /> Experiments</li>
                        </ul>
                    </div>
                    <div className='list-container'>
                        <span>News</span>
                        <ul>
                            <li><FontAwesome name='headphones' /> Latest News</li>
                            <li><FontAwesome name='users' /> Blog</li>
                            <Link to='/about'><li><FontAwesome name='flask' /> About</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='column right'>
                <div className='header right'>
                    <div className='search-container'>
                        <input type='text' className='search' placeholder='Search...' />
                        <FontAwesome name='search' className='search-button' />
                    </div>
                    <FontAwesome name='bell' className='subscribe' />
                </div>
                <div className='content'>
                    <h2>New Songs</h2>
                    <div className='grid'>
                        <Route exact path="/" component={Songs} /> 
                        <Route path="/about" component={About} /> 
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <img src='https://source.unsplash.com/collection/923414/500x500' alt='' /> 
            <FontAwesome name='fast-backward' />     
            <FontAwesome name='play' className='big' /> 
            <FontAwesome name='fast-forward' />        
            <div className='slider-track'>
                <div className='song-title'>Bryce Canyon</div>
                <div className='played'></div>
                <div className='slider'></div>
            </div>
            <FontAwesome name='volume-up' />  
            <div className='volume'>
                <div className='current-volume'></div>
                <div className='slider'></div>
            </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;