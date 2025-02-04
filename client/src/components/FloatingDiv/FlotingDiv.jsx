import React from 'react'
import './FlotingDiv.css'

function FlotingDiv({img, text1, text2}) {
  return (
    <div className='floatingDiv'>
        <img src={img} alt='image' />
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FlotingDiv