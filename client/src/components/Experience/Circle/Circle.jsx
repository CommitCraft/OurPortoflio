import React from 'react'
import "./Circle.css"
const Circle = ({text,firstLine,secondLine}) => {
  return (
    <div className='container2'>
    <div className='circle'>
        <div className='text'>
            {text}
        </div>
    </div>
        <span>{firstLine}</span>
        <span style={{color:'orange'}}>{secondLine}</span>
    </div>
  )
}

export default Circle
