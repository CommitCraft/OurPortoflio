import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Services from "./components/services/Services";
import Work from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
