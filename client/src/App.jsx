import React from "react";
import "./App.css";
import FlotingDiv from "./components/FloatingDiv/FloatingDiv";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Services from "./components/services/Services";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />

      <Services/>
      <Experience/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
