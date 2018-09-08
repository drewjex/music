import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './App2.scss';

class App2 extends Component {
  render() {
    return (
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
                            <li><FontAwesome name='flask' /> About</li>
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
                        {[...Array(20)].map((x, i) =>
                            <div className='card' key={i}>
                                <img src={`https://source.unsplash.com/collection/923414/${480+i}x${480+i}`} alt='' /> 
                                <FontAwesome name='play-circle' className='on-hover' />
                                <div className='title'>Title of Song</div>
                                <div className='subtitle'>Drew Jex</div>
                            </div>
                        )}
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
    );
  }
}

export default App2;
