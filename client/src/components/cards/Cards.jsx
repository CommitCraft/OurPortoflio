import React from 'react'
import './cards.css'
const Cards = ( {emoji, heading, details, color}) => {
  return (
    <div className='card'>
      <img  src={emoji}/>
      <span  className='card-span'>{heading}</span>
      <p className='card-p'>{details}</p>
      <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Cards
