import React from 'react'
import "./Experience.css"
import Imogi from "../../img/h-ob-1.png";
import Circle from './Circle/Circle';
const Experience = () => {
  return (
    <div className='container'>
      <img src={Imogi} alt="" />
        <Circle text="3+" firstLine="Years" secondLine="Experience"/>
        <Circle text="20+" firstLine="Complete" secondLine="Projects"/>
        <Circle text="3+" firstLine="Companies" secondLine="Work"/>
        <Circle text="3+" firstLine="Years" secondLine="Experience"/>
      <img src={Imogi} alt="" />
    </div>
  )
}

export default Experience
