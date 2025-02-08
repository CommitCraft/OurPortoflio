import React from "react";
import "./App.css";
import FlotingDiv from "./components/FloatingDiv/FloatingDiv";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Services from "./components/services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />

      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
