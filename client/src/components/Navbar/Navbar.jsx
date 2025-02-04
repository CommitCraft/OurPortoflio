import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
     
      <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Upskill Mafia</div>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: "none"}}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Experiences</li>
                <li>Contact</li>
            </ul>
        </div>
        <button className="button n-button">Resume Download</button>
      </div>
      </div>
    </>
  );
}

export default Navbar;
