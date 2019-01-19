import React from "react"
import FontAwesome from 'react-fontawesome';
import './App.scss';

const Card = ({index, img}) => (
  <div className='card' key={index}>
        <img src={img} alt='' /> 
        <FontAwesome name='play-circle' className='on-hover' />
        <div className='title'>Title of Song</div>
        <div className='subtitle'>Drew Jex</div>
    </div>
)

export default Card;