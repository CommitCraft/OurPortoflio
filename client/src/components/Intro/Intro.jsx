import React from 'react';
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Fullstack from "../../img/fullstack.jpg";
import Profile from "../../img/profile.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Android from "../../img/android.png";
import Imoji from "../../img/h-ob-1.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import {motion} from "framer-motion";


const Intro = () => {
  return (
    <div className='Intro' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hi I am </span>
          <span>Mansi Prajapati</span>
          <span>A Full Stack Developer with high level of experience in Android and Web designing and development, producting the Quality work...</span> 
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
        <img src={Github} alt='Github' />
        <img src={LinkedIn} alt='Linkedin' />
        <img src={Instagram} alt='Instagram' />
      </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='vec1'/>
        <img src={Vector2} alt='vec2' />
        <img src={Profile} alt='profile' />
      </div>
    </div>
  );
}

export default Intro;
