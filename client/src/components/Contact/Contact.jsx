import React from 'react'
import "./Contact.css"

function contact() {
  return (
    <>
    <div className='contact-form' id="Contact">
        <div className='w-left'>
            <div className='heading'>
                <span>Get in Touch </span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: "#abf1ff94"}}></div>
            </div>
        </div>
        <div className='w-right'>
            <form>
                <input type='text' name='username' className='user' placeholder='Name' />
                <input type='email' name='useremail' className='user' placeholder='Email' />
                <textarea name='msg' className='user' placeholder='Message' />
                <input type='submit' value="send" className='button' />
            </form>
        </div>
    </div>
    </>
  )
}

export default contact