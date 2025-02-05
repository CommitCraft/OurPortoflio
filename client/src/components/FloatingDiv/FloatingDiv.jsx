import React from 'react';
import './FloatingDiv.css';

function FloatingDiv({img, text1, text2}) {
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

export default FloatingDiv;